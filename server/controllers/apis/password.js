const { ErrorHandler } = require("../../shared/error");
const User = require("../../models/user");
const userToken = require("../../shared/userToken");
const crypto = require("crypto");
const { checkInputErrors, encryptPassword, sendSMS } = require("../../shared/utils");

const recover = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { email } = req.body;
        const user = await User.findOne({ $or: [{ mobile: email }, { email }] });

        if (!user) {
            throw new ErrorHandler(400, `no user exist with this email or mobile`);
        }

        // send password reset token to user mobile.
        const token = await userToken.create(user.id, 'passwordReset');
        // send sms to mobile
        sendSMS(user.mobile, token);

        res.status(200).json({
            status: "success",
            message: "otp sent successfully to registered mobile",
        });
    } catch (err) {
        next(err);
    }
};

const resetToken = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { email, otp } = req.body;
        const query = { $or: [{ mobile: email }, { email }] };
        const user = await User.findOne(query);
        if (!user) {
            throw new ErrorHandler(400, `no user exist with this email/mobile`);
        }

        // send password reset token to user mobile.
        await userToken.verify(user.id, otp, "passwordReset");

        // send user password reset token in response
        const resetPasswordToken = crypto.randomBytes(20).toString("hex");
        const resetPasswordExpires = Date.now() + 3600000; //expires in an hour

        await User.find(query).updateOne({ resetPasswordToken, resetPasswordExpires });

        res.status(200).json({
            status: "success",
            message: "password reset otp verified successfully",
            data: { token: resetPasswordToken },
        });
    } catch (err) {
        next(err);
    }
};

const reset = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { password, token } = req.body;
        const query = { resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } };
        const user = await User.findOne(query);

        if (!user) {
            throw new ErrorHandler(400, "Password reset token is invalid or has expired");
        }

        const hash = await encryptPassword(password);
        await User.find({ resetPasswordToken: token }).updateOne({
            password: hash,
            resetPasswordToken: null,
            resetPasswordExpires: null,
        });

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
    resetToken,
    reset,
};
