const mongoose = require('mongoose');
const crypto = require('crypto');
const { ErrorHandler } = require('../shared/error');
const { comparePassword, encryptPassword } = require('../shared/utils');
const { TokenExpiredError } = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isMobileVerified: {
        type: Boolean,
        default: false
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    resetPasswordToken: {
        type: String,
        required: false
    },
    resetPasswordExpires: {
        type: Date,
        required: false
    },
    emailVerificationToken: {
        type: String,
        required: false
    },
    userType: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    },
    date: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    }
});

async function login({ email, password, userType }) {
    try {
        userType = userType || 'user';
        const user = await this.getDetails(email, userType);

        if(!user.isActive) {
            throw new ErrorHandler(400, 'Account is not active');
        }
    
        const status =  await comparePassword(password, user.password).catch((err) => {
            throw new ErrorHandler(400, "Invalid password");
        })

        return user;
    }
    catch(err) {
        throw err;
    }
}

async function getDetails(email, userType) {
    try {
        userType = userType || 'user';
        const user = await this.findOne({ 
            $or: [{ email }, { mobile: email}],
            userType 
        });
    
        if(!user) {
            throw new ErrorHandler(400, 'No account is registered with this email id or mobile');
        }
    
        return user;
    }
    catch(err) {
        throw err;
    }
}

async function checkIfAlreadyExist(email, mobile) {
    try {
        const user = await this.findOne({ 
            $or: [{ email }, {mobile}]
        });

        if(user) {
            throw new ErrorHandler(400, 'User already exist with this email id or mobile');
        }
    
        return false;
    }
    catch(err) {
        throw err;
    }
}

async function setResetPasswordToken(userid) {
    const resetPasswordToken = crypto.randomBytes(20).toString("hex");
    const resetPasswordExpires = Date.now() + 3600000; //expires in an hour

    await this.findById(userid).updateOne({ resetPasswordToken, resetPasswordExpires });

    return resetPasswordToken;
}

async function updatePassword (token, password) {
    try {
        const query = { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } };
        const user = await this.findOne(query);

        if (!user) {
            throw new ErrorHandler(400, "Password reset token is invalid or has expired");
        }

        const hash = await encryptPassword(password);
    
        await this.findOne(query).updateOne({
            password: hash,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        });
    }
    catch(err) {
        throw err;
    }
}

// add static methods on model
Object.assign(userSchema.statics, {
     login,
     getDetails,  
     checkIfAlreadyExist,
     setResetPasswordToken,
     updatePassword
});

module.exports = User = mongoose.model('user', userSchema);
