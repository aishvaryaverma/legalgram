const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../../../controllers/admin');
const authenticate = require('../../../middlewares/admin/auth');
const  { 
    recoverPassword,
    resetPassword,
    verifyOtp,
    login,
    logout
} = authController;

const validate = (method) => {
    switch (method) {
        case "login": {
            return [
                check("email", "Please enter email or mobile").notEmpty(),
                check("password", "Please enter password").notEmpty()
            ];
        }
        case "recoverPassword": {
            return [
                check("email", "Please enter email or mobile").notEmpty()
            ];
        }
        case "verifyOtp": {
            return [
                check("otp", "Please enter otp").notEmpty(),
                check("email", "Please enter email or mobile").notEmpty()
            ];
        }
        case "resetPassword": {
            return [
                check("password", "Please enter password").notEmpty(),
                check("password")
                    .notEmpty()
                    .withMessage("Please enter password")
                    .custom((value, { req }) => {
                        if (value !== req.body.cpassword) {
                            throw new Error("Password confirmation does not match password");
                        }
                        return true;
                    }),
                check("cpassword", "Please enter confirm password").notEmpty()
            ];
        }
        default:
            return null;
    }
};

// login routes
router
    .get('/', login)
    .post('/login', validate('login'), login)
    .get('/logout', authenticate, logout)

// forgot password routes
router
    .get('/password/recover', recoverPassword)
    .post('/password/recover', validate('recoverPassword'), recoverPassword)
    .get('/password/verify-otp/:email', verifyOtp)
    .post('/password/verify-otp', validate('verifyOtp'), verifyOtp)
    .get('/password/reset/:token', resetPassword)
    .post('/password/reset', validate('resetPassword'), resetPassword)

module.exports = router;