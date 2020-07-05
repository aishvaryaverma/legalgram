const express = require('express');
const router = express.Router();
const passwordController = require('../../controllers/forgot-password');
const  {
    recoverPassword,
    resetPassword,
    verifyOtp
} = passwordController;

router
    .get('/recover', recoverPassword)
    .post('/recover', recoverPassword)
    .get('/verify-otp/:email', verifyOtp)
    .post('/verify-otp', verifyOtp)
    .get('/reset/:token', resetPassword)
    .post('/reset', resetPassword)

module.exports = router;