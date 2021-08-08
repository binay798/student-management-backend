const User = require('../modals/userModal');
const Result = require('../modals/resultModal');
const CustomError = require('../utils/CustomError');
const ApiFeatures = require('../utils/apiFeatures');

exports.getUsers = async (req, res, next) => {
  try {
    let users = new ApiFeatures(User.find(), req.query)
      .filter()
      .sort()
      .fields()
      .pagination()
      .populate();

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
    return res.status(200).json({
      status: 'success',
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.searchUser = async (req, res, next) => {
  try {
    const { firstname, role } = req.params;
    const users = await User.find({
      role,
      firstname: { $regex: new RegExp(firstname, 'i') },
    });
    return res.status(200).json({
      status: 'success',
      users,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.addResult = async (req, res, next) => {
  try {
    // create result
    const result = await Result.create(req.body);
    // save object id to users database
    await User.findByIdAndUpdate(
      req.params.id,
      {
        $addToSet: { allResults: result.id },
      },
      { new: true }
    );

    return res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.getResults = async (req, res, next) => {
  try {
    const result = await User.findById(req.params.id)
      .select(['allResults'])
      .sort('-createdAt')
      .populate({
        path: 'allResults',
        match: {
          batch: req.params.batch,
          grade: req.params.grade,
        },
      });

    return res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

// delete result
exports.deleteResult = async (req, res, next) => {
  try {
    await Result.findByIdAndDelete(req.params.resultId);
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      {
        $pull: { allResults: req.params.resultId },
      },
      { new: true }
    );
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

// Add payments
exports.addPayment = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.body.userId,
      {
        $addToSet: { allPayments: req.body },
      },
      { new: true }
    );
    return res.status(200).json({
      status: 'success',
      user,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

// Get payments
exports.getStudentPayments = async (req, res, next) => {
  try {
    const payments = await User.findById(req.params.id).select('allPayments');
    // filter payments

    const newPayments = payments.allPayments.filter((item) => {
      console.log(JSON.stringify(item.batch), JSON.stringify(req.params.batch));
      return (
        item.grade === req.params.grade &&
        JSON.stringify(item.batch) === JSON.stringify(req.params.batch)
      );
    });

    return res.status(200).json({
      status: 'success',
      payments: newPayments,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

// get total number of students and teacher
exports.getTotal = async (req, res, next) => {
  try {
    const student = await User.count({ role: 'student' });
    const teacher = await User.count({ role: 'teacher' });

    return res.status(200).json({
      status: 'success',
      student,
      teacher,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
