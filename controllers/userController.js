const User = require('../modals/userModal');
const Result = require('../modals/resultModal');
// const CustomError = require('../utils/CustomError');
const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');

exports.getUsers = catchAsync(async (req, res, next) => {
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
});

exports.updateUser = catchAsync(async (req, res, next) =>
  res.status(200).json({
    status: 'success',
  })
);

exports.searchUser = catchAsync(async (req, res, next) => {
  const { firstname, role } = req.params;
  const users = await User.find({
    role,
    firstname: { $regex: new RegExp(firstname, 'i') },
  });
  return res.status(200).json({
    status: 'success',
    users,
  });
});

// exports.addResult = catchAsync(async (req, res, next) => {
//   // create result
//   const result = await Result.create(req.body);
//   // save object id to users database
//   await User.findByIdAndUpdate(
//     req.params.id,
//     {
//       $addToSet: { allResults: result.id },
//     },
//     { new: true }
//   );

//   return res.status(200).json({
//     status: 'success',
//     result,
//   });
// });

// exports.getResults = catchAsync(async (req, res, next) => {
//   const result = await User.findById(req.params.id)
//     .select(['allResults'])
//     .sort('-createdAt')
//     .populate({
//       path: 'allResults',
//       match: {
//         batch: req.params.batch,
//         grade: req.params.grade,
//       },
//     });

//   return res.status(200).json({
//     status: 'success',
//     result,
//   });
// });

// delete result
// exports.deleteResult = catchAsync(async (req, res, next) => {
//   await Result.findByIdAndDelete(req.params.resultId);
//   const user = await User.findByIdAndUpdate(
//     req.params.userId,
//     {
//       $pull: { allResults: req.params.resultId },
//     },
//     { new: true }
//   );
//   return res.status(200).json({
//     status: 'success',
//     user,
//   });
// });

// Add payments
exports.addPayment = catchAsync(async (req, res, next) => {
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
});

// Get payments
exports.getStudentPayments = catchAsync(async (req, res, next) => {
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
});

// get total number of students and teacher
exports.getTotal = catchAsync(async (req, res, next) => {
  const student = await User.count({ role: 'student' });
  const teacher = await User.count({ role: 'teacher' });

  return res.status(200).json({
    status: 'success',
    student,
    teacher,
  });
});
