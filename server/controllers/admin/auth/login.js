const { comparePassword, checkInputErrors, getJWTToken } = require('../../../shared/utils');

const login = async (req, res, next) => {
    try {
        
        if (req.method === 'GET') {
            res.render('login');
        }

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
                id: user.id,
                name: user.name
            }
        };
        const token = await  getJWTToken(payload);

        res.status(200)
        .cookie('token', token, { httpOnly: true })
        .redirect('dashboard');
    }
    catch(err) {
        err.page = 'login';
        next(err);
    }
}

module.exports = {
    login
}