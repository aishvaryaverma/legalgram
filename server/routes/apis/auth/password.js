const { check } = require("express-validator");
const express = require("express");
const router = express.Router();
const { recover, resetToken, reset } = require("../../../controllers/apis/password");

const validate = (method) => {
    switch (method) {
        case "recover": {
            return [check("email", "Please enter email or mobile").notEmpty()];
        }
        case "reset-token": {
            return [
                check("email", "Please enter email or mobile").notEmpty(),
                check("otp", "Please enter otp").notEmpty(),
            ];
        }
        case "reset": {
            return [
                check("token", "Please enter reset password token").notEmpty(),
                check("confirm_password", "Please enter confirm password").notEmpty(),
                check("password")
                    .notEmpty()
                    .withMessage("Please enter password")
                    .custom((value, { req }) => {
                        if (value !== req.body.confirm_password) {
                            throw new Error("Password confirmation does not match password");
                        }
                        return true;
                    })
                    .isLength({ min: 6 })
                    .withMessage("Please enter min 6 characters"),
            ];
        }
        default:
            return null;
    }
};

router
    .post("/recover", validate("recover"), recover)
    .post("/verify-reset-token", validate("reset-token"), resetToken)
    .post("/reset", validate("reset"), reset);

module.exports = router;
