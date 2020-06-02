const config = require('config');
const request = require('request');
const axios = require('axios');
const otpGenerator = require('otp-generator');
const UserToken = require('../models/userToken');
const { ErrorHandler } = require('../shared/error');

const create = async (userId, tokenType) => {
    try {
        const otpConfig = { digits: true, alphabets: false, upperCase: false, specialChars: false }
        const otp = otpGenerator.generate(6, otpConfig);

        // save otp to db.
        const userToken = new UserToken({
            userId,
            token: otp,
            tokenType
        });
    
        await userToken.save();
        return otp;
    }
    catch(err) {
        throw err;
    }
}

const verify = async (userId, otp, tokenType) => {
    try {
        const tokenQuery = {userId, token: otp, active: true, tokenType};
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
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    create,
    verify
}