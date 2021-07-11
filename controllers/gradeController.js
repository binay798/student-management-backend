const Grade = require('../modals/gradeModal');
const CustomError = require('../utils/CustomError');
const ApiFeatures = require('../utils/apiFeatures');

exports.createGrade = async (req, res, next) => {
  try {
    const { batch, name } = req.body;
    const isGradeInDb = await Grade.findOne({ batch, name });

    if (isGradeInDb !== null)
      return next(new CustomError('Already exist', 404));
    const grade = await Grade.create(req.body);

    return res.status(200).json({
      status: 'success',
      grade,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.getGrade = async (req, res, next) => {
  try {
    let grades = new ApiFeatures(Grade.find(), req.query)
      .filter()
      .sort()
      .fields()
      .pagination()
      .populate();
    grades = await grades.query;

    return res.status(200).json({
      status: 'success',
      grades,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};

exports.updateGrade = async (req, res, next) => {
  try {
    let grade;
    if (req.params.type === 'basic') {
      grade = await Grade.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
    } else if (req.params.type === 'student') {
      grade = await Grade.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { allStudents: req.body.userId } },
        { new: true }
      );
    } else if (req.params.type === 'teacher') {
      grade = await Grade.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { allSubjects: req.body } },
        { new: true }
      );
    } else {
      return next(
        new CustomError('something went wrong in updating grade', 404)
      );
    }

    return res.status(200).json({
      status: 'success',
      grade,
    });
  } catch (err) {
    return next(new CustomError(err.message, 404));
  }
};
