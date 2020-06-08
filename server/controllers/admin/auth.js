const User = require('../../models/user');
const { comparePassword, checkInputErrors } = require('../../shared/utils');

const loginPage = (req, res) => {
    try {
        res.render('login');
    }
    catch(err) {
        console.log(err);
    }
}

const login = async (req, res, next) => {
    try {console.log(req.body);
        checkInputErrors(req);

        const { email, password } = req.body;
        const user = await User.findOne({ $or: [{ email }, { mobile: email }], userType: 'admin' });

        if(!user) {
            throw new Error('Invalid email or mobile number');
        }

        await comparePassword(password, user.password)
        .catch(err => {
            throw new Error('Invalid password');
        });

        res.redirect('dashboard');
    }
    catch(err) {
        err.page = 'login';
        next(err);
    }
}

const dashboard = (req, res) => {
    try {
        res.render('dashboard');
    }
    catch(err) {
        console.log(err);
    }
}

module.exports = {
    login,
    dashboard,
    loginPage
}