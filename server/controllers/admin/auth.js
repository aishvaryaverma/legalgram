const User = require('../../models/user');
const { comparePassword, checkInputErrors, getJWTToken } = require('../../shared/utils');

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

        // create jwt token and save it in a cookie
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = await  getJWTToken(payload);

        res.status(200)
        .cookie('token', token, { maxAge: 86400 })
        .redirect('dashboard');
    }
    catch(err) {
        err.page = 'login';
        next(err);
    }
}

const dashboard = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.render('dashboard', {
            name: user.name
        });
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