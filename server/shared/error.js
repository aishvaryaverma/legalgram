class ErrorHandler extends Error {
    constructor(statusCode, message, inputErrors) {
        super();
        this.statusCode = statusCode;
        this.message = message;
        this.inputErrors = inputErrors;
    }
}

module.exports = {
    ErrorHandler
}