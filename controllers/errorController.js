const CustomError = require('./../utils/CustomError');

const castErrorDb = (err) => {
  err.message = `Invalid id ${err.value}`;
  return new CustomError(err.message, 400);
};

const validationErrorDb = (err) => {
  let errors = Object.keys(err.errors);
  errors = errors.map((el) => err.errors[el].message);
  err.message = errors.join('. ');
  return new CustomError(err.message, 400);
};

const duplicateFieldErrorDb = (err) => {
  const field = err.message.match(/{([^}]+)}/);
  return new CustomError(`Duplicate field ${field[1]}`, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    error: err,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: 'Something went wrong',
    });
  }
};

const globalErrorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') {
      err = castErrorDb(err);
    }
    if (err.name === 'ValidationError') {
      err = validationErrorDb(err);
    }
    if (err.code === 11000) {
      err = duplicateFieldErrorDb(err);
    }
    sendErrorProd(err, res);
  }
  // res.status(err.statusCode).json({
  //   status: err.status,
  //   message: err.message,
  // });
};

module.exports = globalErrorHandler;
