const login = require('./login');
const forgotPassword = require('./forgot-password');

module.exports = {
    ...login,
    ...forgotPassword
}