const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const paymentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Must have a name'],
  },
  image: {
    type: String,
  },
  grade: {
    type: String,
  },
  batch: {
    type: Date,
  },
  paymentAmount: {
    type: Number,
    required: [true, 'Must have a payment amount'],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
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
  createdAt: {
    type: Date,
    default: Date.now(),
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
  allResults: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Result',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = undefined;
  return 1;
});

userSchema.methods.comparePassword = async (typedPassword, hashedPassword) => {
  const isCorrect = await bcrypt.compare(typedPassword, hashedPassword);
  return isCorrect;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetDate = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = new mongoose.model('User', userSchema);
module.exports = User;
