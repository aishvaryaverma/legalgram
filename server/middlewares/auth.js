const jwt = require("jsonwebtoken");
const config = require("config");
const { ErrorHandler } = require("../shared/error");

module.exports = function (req, res, next) { console.log(config.get('mongoURI'));
    // Get Token from header
    const token = req.header("Authorization");

    // check if no Token
    if (!token) {
        throw new ErrorHandler(401, "Access denied");
    }

    // Verify Token
    try {
        const decoded = jwt.verify(token, config.get("jwt").secret);
        req.user = decoded.user;

        next();
    } catch (err) {
        next(err);
    }
};
