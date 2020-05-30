const mongoose = require('mongoose');

const UserTokenSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    token: {
        type: Number,
        required: true
    },
    tokenType: {
        type: String,
        required: true,
        enum: ['mobileVerification', 'passwordReset', 'emailVerification'],
        default: 'mobileVerification'
    },
    active: {
        type: Boolean,
        default: true
    },
    createdOn: {
        type: Number,
        default: Date.now()
    }
});

module.exports = UserToken = mongoose.model('userToken', UserTokenSchema);
