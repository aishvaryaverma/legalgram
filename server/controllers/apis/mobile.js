const User = require('../../models/user');
const { ErrorHandler } = require('../../shared/error');
const userToken = require('../../shared/userToken');
const { sendSMS, checkInputErrors } = require('../../shared/utils');

const sendOTP = async (req, res, next) => {
    try {
        checkInputErrors(req);
        
        // create user otp token
        const userId = req.user.id;
        const user = await User.findById(userId);
        const otp = await userToken.create(userId, 'mobileVerification');

        // send sms to mobile
        sendSMS(user.mobile, otp);

        res.status(200).json({
            status: 'success',
            message: 'otp sent successfully'
        });
    }
    catch(err) {
        next(err);
    }
}

const verifyOTP = async (req, res, next) => {
    try {
        checkInputErrors(req);

        // verify otp
        const { otp } = req.body;
        const userId = req.user.id;
        await userToken.verify(userId, otp, 'mobileVerification');

        // update the user mobile verification flag
        await User.findById(userId).update({ isMobileVerified: true });
        
        res.status(200).json({
            status: 'success',
            message: 'otp verifed successfully'
        });
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    sendOTP,
    verifyOTP
}