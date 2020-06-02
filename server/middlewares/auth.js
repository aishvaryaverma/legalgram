const jwt = require("jsonwebtoken");
const config = require("config");
const { ErrorHandler } = require("../shared/error");

module.exports = function (req, res, next) {
    // Get Token from header
    const token = req.header("Authorization");

    // check if no Token
    if (!token) {
        return res.status(401).json({ msg: "Authorization denied" });
    }

    // Verify Token
    try {
        const decoded = jwt.verify(token, config.get("jwt").secret);
        req.user = decoded.user;

        next();
    } catch (err) {
        console.error(err);
        throw new ErrorHandler(401, "Authorization denied");
    }
};
