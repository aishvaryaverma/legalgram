const User = require('../../../models/user');
const { ErrorHandler } = require('../../../shared/error');
const crypto = require("crypto");
const userToken = require("../../../shared/userToken");
const { checkInputErrors, encryptPassword, sendSMS } = require("../../../shared/utils");

const recoverPassword = async (req, res, next) => {
    try { console.log(req.method)
        if (req.method === 'GET') {
            res.render('password/recover-password');
        }

        checkInputErrors(req);
        const email = req.body.email;
        const user = await User.findOne({ $or: [ { email }, { mobile: email } ], userType: 'admin' });
        if(!user) {
            throw new ErrorHandler(400, 'Invalid email id or mobile');
        }

        // send password reset token to user mobile.
        const token = await userToken.create(user.id, 'passwordReset');

        // send sms to mobile
        sendSMS(user.mobile, token);

        res.status(200).redirect(`verify-otp/${email}`);
    }
    catch(err) {
        err.page = 'password/recover-password';
        next(err);
    }
}

const verifyOtp = async (req, res, next) => {
    let email;

    try { 

        if (req.method === 'GET') {
            res.render('password/verify-otp', { email: req.params.email });
        }

        checkInputErrors(req);

        const { otp, email } = req.body;
        const user = await User.findOne({ $or: [ { email }, { mobile: email } ], userType: 'admin' });
        if(!user) {
            throw new ErrorHandler(400, 'Invalid email id or mobile');
        }

        // send password reset token to user mobile.
        await userToken.verify(user.id, otp, "passwordReset");

        // send user password reset token in response
        const resetPasswordToken = crypto.randomBytes(20).toString("hex");
        const resetPasswordExpires = Date.now() + 3600000; //expires in an hour

        await User.find({ email }).updateOne({ resetPasswordToken, resetPasswordExpires });

        res.status(200).redirect(`/admin/password/reset/${resetPasswordToken}`);
    }
    catch(err) {
        err.page = 'password/verify-otp'
        next(err);
    }
}

const resetPassword = async (req, res, next) => {
    try {
        if (req.method === 'GET') {
            res.render('password/reset-password', { token: req.params.token });
        }

        checkInputErrors(req);

        const { password, token } = req.body;
        const query = { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } };
        const user = await User.findOne(query);

        if (!user) {
            throw new ErrorHandler(400, "Password reset token is invalid or has expired");
        }

        const hash = await encryptPassword(password);
        await User.find({ resetPasswordToken: token }).updateOne({
            password: hash,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        });

        res.status(200).redirect('/admin');
    }
    catch(err) {
        err.page = 'password/reset-password'
        next(err);
    }
}

module.exports = {
    recoverPassword,
    resetPassword,
    verifyOtp
}