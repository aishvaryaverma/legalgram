const User = require('../../models/user');
const { comparePassword } = require('../../shared/utils');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ userType: 'admin', $or: [ { email }, { email: mobile } ] });

        if(!user) {
            throw new Error('Invalid email or mobile number');
        }

        await comparePassword(password, user.password)
        .catch(err => {
            throw new Error('Invalid password');
        });

        res.render('dashboard');
    }
    catch(err) {
        console.log(err);
        res.status(400).render('login', { errorMsg: err.name });
    }
}

module.exports = {
    login
}