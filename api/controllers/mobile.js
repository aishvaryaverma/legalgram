const User = require('../models/user');
const userToken = require('../shared/userToken');
const { sendSMS, checkInputErrors, getJWTToken } = require('../shared/utils');

const sendOTP = async (req, res, next) => {
    try {
        checkInputErrors(req);
        
        // create user otp token
        const userId = req.user.id;
        // console.log(userId);
        const user = await User.findById(userId);
        const otp = await userToken.create(userId, 'mobileVerification');

        // send sms to mobile
        sendSMS(user.mobile, otp);

        res.status(200).json({
            status: 'success',
            message: 'OTP sent successfully.'
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
        
        const payload = {
            user: {
                id: userId
            }
        };
        const token = await getJWTToken(payload);

        res.status(200).json({
            status: 'success',
            message: 'OTP verifed successfully',
            data: { token }
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