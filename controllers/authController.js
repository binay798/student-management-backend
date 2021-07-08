const jwt = require('jsonwebtoken');
const User = require('../modals/userModal');
const CustomError = require('../utils/CustomError');

const createToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const sendToken = (res, user) => {
  user.password = undefined;

  const token = createToken(user._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_EXPIRES_IN * 3600 * 1000 * 24
    ),
    httpOnly: true,
    secure: false,
  };
  res.cookie('jwt', token, cookieOptions);
  res.status(200).json({
    status: 'success',
    user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    sendToken(res, user);
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.autoLoginThroughCookies = async (req, res, next) => {
  try {
    if (!req.cookies.jwt) return next(new CustomError('Not authorized', 404));
    const decoded = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    user.password = undefined;
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // check existence of user through email
    const user = await User.findOne({ email });
    if (!user)
      return next(new CustomError('Email or password doesnot match', 404));
    // compare password
    const isPasswordCorrect = await user.comparePassword(
      password,
      user.password
    );

    if (!isPasswordCorrect)
      return next(new CustomError('Email or password doesnot match', 404));

    return sendToken(res, user);
  } catch (err) {
    res.json({
      status: 'fail',
      message: err.message,
    });
  }
};

exports.protectRoutes = async (req, res, next) => {
  try {
    if (!req.cookies.jwt) return next(new CustomError('Not authorized', 400));
    const verified = await jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
    const user = await User.findById(verified.id);
    if (!user) return next(new CustomError('User not found', 404));
    if (user.role !== 'admin')
      return next(new CustomError('Not authorized', 404));
    req.user = user;
    next();
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.updateUser = async (req, res, next) => {
  try {
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
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
