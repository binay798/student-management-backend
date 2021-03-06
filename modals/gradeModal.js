const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must have a name'],
  },
  batch: {
    type: Date,
    required: [true, 'Must have a batch'],
  },
  totalGradeFee: {
    type: Number,
    default: 0,
    required: [true, 'Must have total fee'],
  },
  allStudents: [
    {
      rollNumber: Number,
      student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
  classTeacher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  allSubjects: [
    {
      name: String,
      teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    },
  ],
});

const Grade = new mongoose.model('Grade', gradeSchema);
module.exports = Grade;
