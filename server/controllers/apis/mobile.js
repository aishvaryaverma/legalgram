const { validationResult } = require('express-validator');
const config = require('config');
const User = require('../../models/User');
const { ErrorHandler } = require('../../shared/error');
const userToken = require('../../shared/userToken');

const sendOTP = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }
        
        // send otp.
        const userId = req.user.id;
        const user = await User.findById(userId);
        const otp = await userToken.send(userId, user.mobile, 'mobileVerification');
        console.log(otp);

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
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }

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