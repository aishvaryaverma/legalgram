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
