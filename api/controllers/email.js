const { checkInputErrors, Error } = require('../shared/utils');
const { ErrorHandler } = require('../shared/error');
const User = require('../models/user');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const config = require('config');
const {host, username, port, password } = config.get("smtp");

const verify = async (req, res, next) => {
    try { 
        checkInputErrors(req);

        const { email } = req.body;
        const user = await User.findOne({ email })
        const emailVerificationToken = crypto.randomBytes(20).toString("hex");
        
        if (!user) {
            throw new ErrorHandler(400, 'Email is not registered');
        }

        await User.findOne({email}).update({emailVerificationToken});

        const transport = nodemailer.createTransport({
            host,
            port,
            auth: {
               user: username,
               pass: password
            }
        });

        const message = {
            from: 'legalgram@gmail.com', // Sender address
            to: email,         // List of recipients
            subject: 'Design Your Model S | Tesla', // Subject line
            text: 'Have the most fun you can in a car. Get your Tesla today!' // Plain text body
        };
        transport.sendMail(message, function(err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info);
            }
        });

        res.status(200).json({
            status: 'success',
            data: { token: emailVerificationToken, userId: user.id },
            message: 'verification email sent successfully'
        }); 

    }
    catch(err) {
        next(err);
    }
}

const confirm = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { userId, token } = req.params;
        const user = await User.findById(userId).catch((err) => {
            throw new ErrorHandler(400, 'Email is not registered');
        })

        if (!user) {
            throw new ErrorHandler(400, 'Email is not registered');
        }

        if (user.emailVerificationToken !== token) {
            throw new ErrorHandler(400, 'Email verification token is invalid');
        }

        await User.findById(userId).update({emailVerificationToken: null});

        res.status(200).json({
            status: 'success',
            message: 'Email verified successfully'
        });

    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    verify,
    confirm
}