const { check } = require("express-validator");
const express = require("express");
const router = express.Router();
const authenticate = require('../../../middlewares/auth');
const userController = require("../../../controllers/apis/users");
const { register, login, list, details, update, me } = userController;

const validate = (method) => {
    switch (method) {
        case "login": {
            return [
                check("email", "Please enter name or email").notEmpty(),
                check("password", "Please enter password").notEmpty(),
            ];
        }
        case "register": {
            return [
                check("name", "Please enter name").not().isEmpty(),
                check("email", "Please enter a valid email").isEmail(),
                check("password", "Please enter min 6 characters").isLength({ min: 6 }),
                check("mobile", "Please enter a valid mobile").isLength({ min: 7, max: 15 }),
            ];
        }
        default:
            return null;
    }
};

router.post("/register", validate("register"), register)
      .post("/login", validate("login"), login)
      .get("/list", authenticate, list)
      .get("/me", authenticate, me)
      .get("/:id", authenticate, details)
      .put("/:id", authenticate, update);

module.exports = router;
