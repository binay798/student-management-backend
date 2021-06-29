const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must contain name'],
  },
  description: {
    type: String,
    required: [true, 'Must contain description'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Event = new mongoose.model('Event', eventSchema);

module.exports = Event;
