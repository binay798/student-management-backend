const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const paymentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must have a name'],
  },
  image: {
    type: String,
  },
  role: {
    type: String,
    enum: ['student', 'teacher'],
    required: [true, 'Must have a role'],
  },
  grade: {
    type: String,
  },
  batch: {
    type: Date,
    required: [true, 'Must contain batch date'],
  },
  paymentAmount: {
    type: Number,
    required: [true, 'Must have a payment amount'],
  },
  paymentDate: {
    type: Date,
    required: [true, 'Must have a payment date'],
  },
  paymentDescription: {
    type: String,
    required: [true, 'Must contain payment description'],
  },
});

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'Must contain firstname'],
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
    required: [true, 'Must contain lastname'],
  },
  profilePic: {
    type: String,
  },
  grade: {
    type: String,
  },
  batch: {
    type: Date,
  },
  role: {
    type: String,
    required: [true, 'Must contain role'],
    enum: ['student', 'teacher', 'admin'],
    default: 'student',
  },
  email: {
    type: String,
    required: [true, 'Must contain an email'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Must contain password'],
    minLength: 6,
    select: false,
  },
  confirmPassword: {
    type: String,
    required: [true, 'Must contain confirm password'],
    validate: {
      validator: function () {
        return this.password === this.confirmPassword;
      },
      message: 'Password doesnot match',
    },
  },
  passwordResetToken: {
    type: String,
  },
  passwordResetDate: {
    type: Date,
  },
  mobile: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  address: {
    type: String,
  },
  allPayments: [paymentSchema],
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
});

userSchema.methods.comparePassword = async (typedPassword, hashedPassword) => {
  return await bcrypt.compare(typedPassword, hashedPassword);
};

const User = new mongoose.model('User', userSchema);
module.exports = User;
