const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const { secret, expiresIn } = config.get('jwt');
module.exports = {
    getJWTToken: (payload) => {
        return new Promise((resolve, reject) => {
            jwt.sign(
                payload, // This will contains user id we got back from database // auto generated user id from mongoDB
                secret, // This is our manual secret key
                { expiresIn: expiresIn * 24 * 60 * 60 }, // Valid for 3 days
                function(err, token) { // Callback function
                    if(err) throw err;
                    resolve(token);
                }
            );
        })
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
    }
}