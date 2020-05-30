const { validationResult } = require('express-validator');
const config = require('config');
const UserToken = require('../../models/userToken');
const User = require('../../models/User');
const otpGenerator = require('otp-generator');
const { ErrorHandler } = require('../../shared/error');

const sendOTP = async (req, res, next) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }
        
        const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false });
        const userToken = new UserToken({
            userId: req.user.id,
            token: otp
        });

        await userToken.save();

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
        const tokenQuery = {userId, token: otp, active: true};
        const userToken = await UserToken.find(tokenQuery);
        if(!userToken.length) {
            throw new ErrorHandler(400, 'invalid otp');
        }

        // check toke expiry
        const tokenAge = Date.now() - Date(userToken.createdOn);
        if(tokenAge > config.get('otp_expires_in') * 60 * 1000) {
            throw new ErrorHandler(400, 'otp is expired');
        }
        
        // update otp active status
        await UserToken.find(tokenQuery).update({active: false});

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