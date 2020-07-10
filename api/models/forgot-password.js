const User = require('./user');
const UserToken = require('../shared/userToken');
const { sendSMS } = require('../shared/utils');


const recover = async (email, type) => {
    try {
        const user = await User.getDetails(email, type);

        // create a user verification token
        const token = await UserToken.create(user.id, 'passwordReset');
        console.log(token);
        // sms verfication token to user mobile
        sendSMS(user.mobile, token);
    
        return token;
    }
    catch(err) {
        throw err;
    }
}

const verifyOtp = async (email, otp, type) => {
    try {
        // fetch user details
        const user = await User.getDetails(email, type);

        // very mobile otp
        await UserToken.verify(user.id, otp, "passwordReset");

        // save password reset token.
        const token = await User.setResetPasswordToken(user.id);

        return token;
    }
    catch(err) {
        throw err;
    }
    
}

const reset = async (token, password) => {
    try {
        await User.updatePassword(token, password);
    }
    catch(err) {
        throw err;
    }
}

module.exports = {
    recover,
    verifyOtp,
    reset
}