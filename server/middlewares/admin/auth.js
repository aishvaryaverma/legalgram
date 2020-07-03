const apiClient = require('../../controllers/admin/apiClient');

const clearCookieAndRedirect = (res) => {
    res.status(401).redirect('/admin');
}

module.exports = async function (req, res, next) {
    // read jwt token from cookie
    const { token } = req.cookies;

    // check if no Token
    if (!token) {
        clearCookieAndRedirect(res);
    }

    // Verify Token
    try {
        const result = await apiClient.get('/users/me', {
            headers: { 'Authorization': token }
        });
        // set up request local variables to be accessed in pug later on
        res.locals.user = result.data.user;

        next();
    } catch (err) {
        if (err.statusCode === 401) {
            clearCookieAndRedirect(res);
        }
    }
};