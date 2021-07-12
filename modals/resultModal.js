const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  photoUrl: {
    type: String,
    required: [true, 'Must contain url of photo'],
  },
  name: {
    type: String,
    required: [true, 'Must contain name'],
  },
  grade: {
    type: String,
    required: [true, 'Must contain grade'],
  },
  batch: {
    type: Number,
    required: [true, 'Must contain batch'],
  },
  resultType: {
    type: Number,
    required: [true, 'Must contain type of result'],
  },
});

const Result = new mongoose.model('Result', resultSchema);
module.exports = Result;
