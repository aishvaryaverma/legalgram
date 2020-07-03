const Password = require("../../models/forgot-password");
const { checkInputErrors, sendSMS } = require("../../shared/utils");

const recover = async (req, res, next) => {
    try {
        checkInputErrors(req);

        let { email, userType } = req.body;
        if (!userType) {
            userType = 'user';
        }
        const token = await Password.recover(email, userType);
        res.status(200).json({
            status: "success",
            message: "otp sent successfully to registered mobile",
        });
    } catch (err) {
        next(err);
    }
};

const verifyOtp = async (req, res, next) => {
    try {
        checkInputErrors(req);

        let { email, otp, userType } = req.body;
        if (!userType) {
            userType = 'user';
        }
        const token = await Password.verifyOtp(email, otp, userType);

        res.status(200).json({
            status: "success",
            message: "Reset password otp verified successfully",
            data: { token }
        });
    } catch (err) {
        next(err);
    }
};

const reset = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { password, token } = req.body;
        await Password.reset(token, password);

        res.status(200).json({
            status: "success",
            message: "password updated successfully",
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    recover,
    verifyOtp,
    reset,
};
