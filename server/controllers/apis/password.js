const express = require('express');
const router = express.Router();
const { validationResult } = require('express-validator');
const { ErrorHandler } = require('../../shared/error');
const User = require('../../models/User');
const userToken = require('../../shared/userToken');
const utils = require('../../shared/utils');


const recover = async (req, res, next) => {
    try {
        const { email } = req.body;

        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }

        const user = await User.find({ email, mobile: email });
        if(!user.length) {
            throw new ErrorHandler(400, `no user exist with ${email} email/mobile`);
        }
        
        // send password reset token to user mobile.
        await userToken.send(user.id, user.mobile, 'passwordReset');
    }
    catch(err) {
        next(err);
    }
}

const resetToken = async (req, res, next) => {
    try {
        const { email, token } = req.body;

        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }

        const user = await User.find({ email: emailOrMobile, mobile: emailOrMobile });
        if(!user.length) {
            throw new ErrorHandler(400, `no user exist with ${emailOrMobile} email/mobile`);
        }
        
        // send password reset token to user mobile.
        await userToken.verify(user.id, token, 'passwordReset');

        // send user jwt in response
        const payload = {
            user: {
                id: user.id
            }
        }
        const jwtToken = utils.getJWTToken(payload);
        res.status(200).json(jwtToken)
    }
    catch(err) {
        next(err);
    }
}

const reset = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const { password } = req.body;
        const hash = await utils.encryptPassword(password);
        await User.findById(userId).update({ password: hash});
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    recover,
    resetToken,
    reset
}