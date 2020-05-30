const config = require('config');
const request = require('request');
const axios = require('axios');
const otpGenerator = require('otp-generator');
const UserToken = require('../models/userToken');
const { ErrorHandler } = require('../shared/error');

const send = async (userId, mobile) => {
    try {
        const otpConfig = { digits: true, alphabets: false, upperCase: false, specialChars: false }
        const otp = otpGenerator.generate(6, otpConfig);

        // send otp to mobile.
        const smsConfig = config.get('sms');

        // send sms to mobile
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';//TODO to be removed
        request(`https://api.bizzsms.in/api/v2/SendSMS?SenderId=BIZZPA&Is_Unicode=false&Is_Flash=false&Message=${otp}&MobileNumbers=91${mobile}&ApiKey=DeP2ldNrI9Xesj1IlRDw2B6T8La7GaLlGxBj5lyFnXU=&ClientId=f1d90f68-789d-4b21-a0fc-25142135bc10`, function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
       
        // save otp to db.
        const userToken = new UserToken({
            userId,
            token: otp
        });
    
        await userToken.save();
        return otp;
    }
    catch(err) {
        throw err;
    }
}

const verify = async (userId, otp) => {
    try {
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
    }
    catch(err) {
        throw err;
    }
}
module.exports = {
    send,
    verify
}