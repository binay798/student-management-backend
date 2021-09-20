const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../modals/userModal');
const CustomError = require('../utils/CustomError');
const Email = require('../utils/Email');
const catchAsync = require('../utils/catchAsync');

const createToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const sendToken = (res, user) => {
  user.password = undefined;

  const token = createToken(user.id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 3600 * 1000 * 24
    ),
    httpOnly: true,
    secure: false,
  };
  if (process.env.NODE_ENV === 'production') {
    cookieOptions.secure = true;
  }
  res.cookie('jwt', token, cookieOptions);
  res.status(200).json({
    status: 'success',
    user,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  return sendToken(res, user);
});

exports.autoLoginThroughCookies = catchAsync(async (req, res, next) => {
  if (!req.cookies.jwt) return next(new CustomError('Not authorized', 404));
  const decoded = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id);
  if (!user) return next(new CustomError('User doesnot exist', 404));
  user.password = undefined;
  return res.status(200).json({
    status: 'success',
    user,
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password, role } = req.body;
  // check existence of user through email
  const user = await User.findOne({ email, role }).select('+password');
  if (!user)
    return next(new CustomError('Email or password doesnot match', 404));
  // compare password
  const isPasswordCorrect = await user.comparePassword(password, user.password);

  if (!isPasswordCorrect)
    return next(new CustomError('Email or password doesnot match', 404));

  return sendToken(res, user);
});

exports.logout = (req, res) => {
  res.cookie('jwt', '');
  res.status(200).json({
    status: 'success',
    message: 'User logged out',
  });
};

exports.protectRoutes = catchAsync(async (req, res, next) => {
  if (!req.cookies.jwt) return next(new CustomError('Not authorized', 400));
  const verified = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const user = await User.findById(verified.id);
  if (!user) return next(new CustomError('User not found', 404));
  if (user.role !== 'admin')
    return next(new CustomError('Not authorized', 404));
  req.user = user;
  next();
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const excludeFields = ['password', 'confirmPassword'];
  excludeFields.forEach((item) => delete req.body[item]);
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!updatedUser) return next(new CustomError('User not found', 404));
  updatedUser.password = undefined;

  return res.json({
    status: 'success',
    user: updatedUser,
  });
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // find if the user exist or not
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return next(new CustomError('User with this email doesnot exist', 404));
  // if user exist then send token to his/her email
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  const resetUrl = `${req.protocol}://${req.get(
    'host'
  )}/auth/resetPassword/${resetToken}`;
  // send email
  const send = new Email(email, 'Reset password', resetUrl);
  await send.sendMail();

  res.status(200).json({
    status: 'success',
  });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  const { resetToken } = req.params;
  const decodedToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  const user = await User.findOne({
    passwordResetToken: decodedToken,
    passwordResetDate: { $gt: Date.now() },
  });
  if (!user) return next(new CustomError('Token has been expired', 404));
  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  user.passwordResetToken = undefined;
  user.passwordResetDate = undefined;
  await user.save();

  res.status(200).json({
    status: 'success',
  });
});
