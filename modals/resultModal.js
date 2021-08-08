const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  photoUrl: {
    type: String,
    required: [true, 'Must contain url of photo'],
  },
  title: {
    type: String,
    required: [true, 'Must contain name'],
  },
  grade: {
    type: String,
    required: [true, 'Must contain grade'],
  },
  batch: {
    type: Date,
    required: [true, 'Must contain batch'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Result = new mongoose.model('Result', resultSchema);
module.exports = Result;
