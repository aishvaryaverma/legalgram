const { validationResult } = require("express-validator");
const { ErrorHandler } = require("./error");

class Utils {
    checkInputErrors(req) {
        try {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                const inputErrors = {};

                errors.array().forEach(error => {
                    inputErrors[error.param] = error.msg;
                });

                throw new ErrorHandler(400, 'Input params validations failed', inputErrors);
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = new Utils();
