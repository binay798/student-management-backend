const User = require('../modals/userModal');
const CustomError = require('../utils/CustomError');
const ApiFeatures = require('../utils/apiFeatures');

exports.getUsers = async (req, res, next) => {
  try {
    console.log(req.query);
    let users = new ApiFeatures(User.find(), req.query)
      .filter()
      .sort()
      .fields()
      .pagination();

    users = await users.query;

    return res.status(200).json({
      status: 'success',
      users,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    console.log(req.params.id);
    return res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
