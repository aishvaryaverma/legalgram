const User = require('../../models/user');

const dashboard = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.render('dashboard');
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

const logout = (req, res) => {
    res.clearCookie('token').redirect('/admin');
}

module.exports = {
    dashboard,
    logout
}