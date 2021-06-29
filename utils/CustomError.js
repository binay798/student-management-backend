
class CustomError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = this.statusCode.toString().startsWith('4') ? 'Error' : 'fail'
    }
}

module.exports = CustomError;