const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Image = new mongoose.model('Image', imageSchema);
module.exports = Image;
