const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const passwordController = require('../../../controllers/admin/forgot-password');
const  {
    recoverPassword,
    resetPassword,
    verifyOtp
} = passwordController;

const validate = (method) => {
    switch (method) {
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

router
    .get('/recover', recoverPassword)
    .post('/recover', validate('recoverPassword'), recoverPassword)
    .get('/verify-otp/:email', verifyOtp)
    .post('/verify-otp', validate('verifyOtp'), verifyOtp)
    .get('/reset/:token', resetPassword)
    .post('/reset', validate('resetPassword'), resetPassword)

module.exports = router;