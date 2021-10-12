const Grade = require('../modals/gradeModal');
const CustomError = require('../utils/CustomError');
const ApiFeatures = require('../utils/apiFeatures');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/CustomError');

exports.createGrade = catchAsync(async (req, res, next) => {
  const { batch, name } = req.body;
  const isGradeInDb = await Grade.findOne({ batch, name });

  if (isGradeInDb !== null) return next(new CustomError('Already exist', 404));
  const grade = await Grade.create(req.body);

  return res.status(200).json({
    status: 'success',
    grade,
  });
});

exports.getAllGrades = catchAsync(async (req, res, next) => {
  let grades = new ApiFeatures(Grade.find(), req.query)
    .filter()
    .sort()
    .fields()
    .pagination()
    .populate();
  grades = await grades.query;

  return res.status(200).json({
    status: 'success',
    results: grades.length,
    grades,
  });
});

exports.getGrade = catchAsync(async (req, res, next) => {
  // const grade = await Grade.findById(req.params.id).select('batch');
  let grade = new ApiFeatures(Grade.findById(req.params.id), req.query)
    .filter()
    .sort()
    .fields()
    .pagination()
    .populate();
  grade = await grade.query;
  if (grade.length === 0) return next(new AppError('Grade not found', 404));
  return res.status(200).json({
    status: 'success',
    grade,
  });
});

exports.updateGrade = catchAsync(async (req, res, next) => {
  const grade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  // if (req.params.type === 'basic') {
  //   grade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
  //     new: true,
  //   });
  // } else if (req.params.type === 'student') {
  //   grade = await Grade.findByIdAndUpdate(
  //     req.params.id,
  //     { $addToSet: { allStudents: req.body.userId } },
  //     { new: true }
  //   );
  // } else if (req.params.type === 'teacher') {
  //   grade = await Grade.findByIdAndUpdate(
  //     req.params.id,
  //     { $addToSet: { allSubjects: req.body } },
  //     { new: true }
  //   );
  // } else {
  //   return next(new CustomError('something went wrong in updating grade', 404));
  // }

  return res.status(200).json({
    status: 'success',
    grade,
  });
});

exports.deleteGrade = catchAsync(async (req, res, next) => {
  const grade = await Grade.findByIdAndDelete(req.params.id);
  if (!grade) return next(new AppError('Couldnot find the grade', 404));
  res.status(204).json({
    status: 'success',
    data: null,
  });
});

// exports.getStudentFromGrade = catchAsync(async (req, res, next) => {
//   const grade = await Grade.findById(req.params.gradeId).populate(
//     'allStudents.student'
//   );
//   const selectedStudent = grade.allStudents.filter(
//     (item) => item.id === req.params.studentId
//   )[0];
//   return res.status(200).json({
//     status: 'success',
//     student: { selectedStudent, grade: grade.name, batch: grade.batch },
//   });
// });

// exports.updateStudentInsideGrade = catchAsync(async (req, res, next) => {
//   let grade = await Grade.findOneAndUpdate(
//     { _id: req.params.gradeId, 'allStudents._id': req.params.studentId },
//     {
//       $set: {
//         'allStudents.$.rollNumber': req.body.rollNumber,
//       },
//     }
//   );
//   grade = await Grade.findById(req.params.gradeId).populate([
//     'allStudents.student',
//     'allSubjects.teacher',
//     'classTeacher',
//   ]);
//   return res.status(200).json({
//     status: 'success',
//     grade,
//   });
// });

// exports.addStudentInsideGrade = catchAsync(async (req, res, next) => {
//   let grade = await Grade.findByIdAndUpdate(req.params.gradeId, {
//     $addToSet: {
//       allStudents: req.body,
//     },
//   });
//   grade = await Grade.findById(req.params.gradeId).populate([
//     'allStudents.student',
//     'allSubjects.teacher',
//   ]);
//   return res.status(200).json({
//     status: 'success',
//     grade,
//   });
// });

// exports.removeStudentFromGrade = catchAsync(async (req, res, next) => {
//   const grade = await Grade.findByIdAndUpdate(
//     req.params.gradeId,
//     {
//       $pull: {
//         allStudents: {
//           _id: req.body.studentId,
//         },
//       },
//     },
//     { new: true }
//   );

//   return res.status(200).json({
//     status: 'success',
//     grade,
//   });
// });

// exports.addSubjectInsideGrade = catchAsync(async (req, res, next) => {
//   let grade = await Grade.findByIdAndUpdate(
//     req.params.gradeId,
//     {
//       $addToSet: {
//         allSubjects: req.body,
//       },
//     },
//     { new: true }
//   );
//   grade = await Grade.findById(req.params.gradeId).populate([
//     'allStudents.student',
//     'allSubjects.teacher',
//   ]);

//   return res.status(200).json({
//     status: 'success',
//     grade,
//   });
// });

// exports.removeSubjectFromGrade = catchAsync(async (req, res, next) => {
//   let grade = await Grade.findByIdAndUpdate(
//     req.params.gradeId,
//     {
//       $pull: {
//         allSubjects: {
//           _id: req.body.subjectId,
//         },
//       },
//     },
//     { new: true }
//   );
//   grade = await Grade.findById(req.params.gradeId).populate([
//     'allStudents.student',
//     'allSubjects.teacher',
//   ]);

//   return res.status(200).json({
//     status: 'success',
//     grade,
//   });
// });
