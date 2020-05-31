const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { ErrorHandler } = require('../shared/error');
const config = require('config');
const { validationResult } = require('express-validator');
const request = require('request');
const jwtConfig = config.get('jwt');

module.exports = {
    getJWTToken: (payload, config) => {
        const tokenConfig = { ...jwtConfig, ...config }
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload, // This will contains user id we got back from database // auto generated user id from mongoDB
                tokenConfig.secret, // This is our manual secret key
                { expiresIn: tokenConfig.expiresIn * 24 * 60 * 60 }, // Valid for 3 days
                function(err, token) { // Callback function
                    if(err) throw err;
                    resolve(token);
                }
            );
        })
    },
    verifyJWTToken: (req, res, next) => {
        try {
            const header = req.headers['authorization'];

            if(typeof header !== 'undefined') {
                const bearer = header.split(' ');
                const token = bearer[1];
                const decodedToken = jwt.verify(token, jwtConfig.secret);
    
                req.user = decodedToken.user;
                next();
            } else {
                throw new ErrorHandler(403, 'invalid access token');
            }
        }
        catch(err) {
            next(err);
        }
    },
    encryptPassword: async (password) => {
        // Creating a salt for password
        const salt = await bcrypt.genSalt(10);

        // Hash Password
        password = await bcrypt.hash(password, salt);

        return password;
    },
    comparePassword: (password, userPassword) => {
        return new Promise((resolve, reject) => {
            return bcrypt.compare(password, userPassword).then((res) => {
                if(res) {
                    resolve(true);
                }
                else {
                    reject('invalid password');
                }
            });
        });
    },
    checkInputErrors: (req) => {
        try {
            const errors = validationResult(req);
    
            if(!errors.isEmpty()) {
                throw new ErrorHandler(400, errors.array());
            }
        }
        catch(err) {
            throw err;
        }
    },
    sendSMS: (mobile, otp) => {
        process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';//TODO to be removed
        request(`https://api.bizzsms.in/api/v2/SendSMS?SenderId=BIZZPA&Is_Unicode=false&Is_Flash=false&Message=${otp}&MobileNumbers=91${mobile}&ApiKey=DeP2ldNrI9Xesj1IlRDw2B6T8La7GaLlGxBj5lyFnXU=&ClientId=f1d90f68-789d-4b21-a0fc-25142135bc10`, function (error, response, body) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            console.log('body:', body); // Print the HTML for the Google homepage.
        });
    }
}