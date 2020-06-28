const Password = require('../../models/forgot-password');
const { checkInputErrors } = require("../../shared/utils");
const e = require('express');
    
const recoverPassword = async (req, res, next) => {
    try { 
        if (req.method === 'GET') {
            res.render('password/recover');
        }
        else {
            checkInputErrors(req);

            const email = req.body.email;
            await Password.recover(email, 'admin');
    
            res.status(200).redirect(`verify-otp/${email}`);
        }
    }
    catch(err) {
        err.page = 'password/recover';
        next(err);
    }
}

const verifyOtp = async (req, res, next) => {
    let email;

    try { 

        if (req.method === 'GET') {
            res.render('password/verify', { email: req.params.email });
        }
        else {
            checkInputErrors(req);

            const { otp, email } = req.body;
            const token = await Password.verifyOtp(email, otp, 'admin');
    
            res.status(200).redirect(`/admin/password/reset/${token}`);
        }
    }
    catch(err) {
        err.page = 'password/verify'
        next(err);
    }
}

const resetPassword = async (req, res, next) => {
    try {
        if (req.method === 'GET') {
            res.render('password/reset', { token: req.params.token });
        }
        else {
            checkInputErrors(req);

            const { password, token } = req.body;
            await Password.reset(token, password);
    
            res.status(200).redirect('/admin');
        }
    }
    catch(err) {
        err.page = 'password/reset'
        next(err);
    }
}

module.exports = {
    recoverPassword,
    resetPassword,
    verifyOtp
}