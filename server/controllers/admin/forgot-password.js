const { checkInputErrors } = require("../../shared/utils");
const apiClient = require('./apiClient');
    
const recoverPassword = async (req, res, next) => {
    try { 
        if (req.method === 'GET') {
            res.render('password/recover');
        }
        else {
            checkInputErrors(req);

            const email = req.body.email;
            await apiClient.post('/password/recover', { email, userType: 'admin' });
    
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
            const result = await apiClient.post('/password/verify-otp', { otp, email, userType: 'admin' });
    
            res.status(200).redirect(`/admin/password/reset/${result.data.token}`);
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

            const { password, confirm_password, token } = req.body;
            await apiClient.post('/password/reset', { password, confirm_password, token });
    
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