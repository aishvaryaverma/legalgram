const jwt = require("jsonwebtoken");
const config = require("config");
const { ErrorHandler } = require("../shared/error");

module.exports = function (req, res, next) {
    // Verify Token
    try {
        // Get Token from header
        const token = req.header("Authorization");

        // check if no Token
        if (!token) {
            throw new ErrorHandler(401, "Access token is missing or invalid");
        }

        const decoded = jwt.verify(token, config.get("jwt").secret, (err, decoded) => {
            if(err) {
                throw new ErrorHandler(401, err.message);
            }
            else {
                req.user = decoded.user;
                next();
            }
        });
    } catch (err) {
        next(err);
    }
};
