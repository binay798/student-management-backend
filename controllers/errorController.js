const CustomError = require('./../utils/CustomError')

const globalErrorHandler = (err, req, res, next) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}

module.exports = globalErrorHandler;