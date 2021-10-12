const Result = require('../modals/resultModal');
const User = require('../modals/userModal');
const catchAsync = require('../utils/catchAsync');
const ApiFeatures = require('../utils/apiFeatures');

exports.createResult = catchAsync(async (req, res, next) => {
  //   CREATE RESULT
  const result = await Result.create(req.body);
  // SAVE TO STUDENT RESULT FIELD
  const user = await User.findByIdAndUpdate(
    req.params.userId,
    {
      $addToSet: { allResults: result.id },
    },
    { new: true }
  );

  res.status(200).json({
    status: 'success',
    user,
  });
});

exports.getAllResults = catchAsync(async (req, res, next) => {
  let results = new ApiFeatures(Result.find(), req.query)
    .filter()
    .sort()
    .fields()
    .pagination()
    .populate();

  results = await results.query;
  res.status(200).json({
    status: 'success',
    results,
  });
});

exports.getUserResults = catchAsync(async (req, res, next) => {
  let results = new ApiFeatures(User.findById(req.params.userId), req.query)
    .filter()
    .sort()
    .fields()
    .pagination()
    .populate();
  results = await results.query;
  res.status(200).json({
    status: 'success',
    results,
  });
});

exports.deleteResult = catchAsync(async (req, res, next) => {
  const { userId, resultId } = req.params;

  await Result.findByIdAndDelete(resultId);
  await User.findByIdAndUpdate(userId, {
    $pull: { allResults: resultId },
  });
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
