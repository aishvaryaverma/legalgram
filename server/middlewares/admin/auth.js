const jwt = require("jsonwebtoken");
const config = require("config");
const { ErrorHandler } = require("../../shared/error");

const clearCookieAndRedirect = (res) => {
    res.status(401).redirect('/admin');
}


module.exports = function (req, res, next) {
    // read jwt token from cookie
    const { token } = req.cookies;

    // check if no Token
    if (!token) {
        clearCookieAndRedirect(res);
    }

    // Verify Token
    try {
        const decoded = jwt.verify(token, config.get("jwt").secret);
        const user = decoded.user;
        req.user = user;

        // set up request local variables to be accessed in pug later on
        res.locals.user = user;

        next();
    } catch (err) {
        next();
    }
};