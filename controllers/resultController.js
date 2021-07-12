const Result = require('../modals/resultModal');

const CustomError = require('../utils/CustomError');

exports.createResult = async (req, res, next) => {
  try {
    const result = await Result.create(req.body);

    return res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.getResult = async (req, res, next) => {
  try {
    const result = await Result.find();

    return res.json({
      status: 'success',
      result,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
