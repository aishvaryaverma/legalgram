const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { sendOTP, verifyOTP } = require("../../../controllers/apis/mobile");

const validate = (method) => {
    switch (method) {
        case "verify-otp": {
            return [check("otp", "Please enter valid otp").notEmpty()];
        }
        default:
            return null;
    }
};

router
    .post("/send-otp", sendOTP)
    .post("/verify-otp", validate("verify-otp"), verifyOTP);

module.exports = router;
