const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { verify, confirm } = require("../../../controllers/apis/email");

const validate = (method) => {
    switch (method) {
        case "verify": {
            return [check("email", "Please enter valid email").notEmpty()];
        }
        default:
            return null;
    }
};

router.post("/verify", validate("verify"), verify);
router.get("/confirm/:userId/:token", confirm);

module.exports = router;
