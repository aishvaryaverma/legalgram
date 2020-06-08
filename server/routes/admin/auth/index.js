const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../../../controllers/admin/auth');
const { login, loginPage, dashboard } = authController;

const validate = (method) => {
    switch (method) {
        case "login": {
            return [
                check("email", "Please enter email or password").notEmpty(),
                check("password", "Please enter password").notEmpty()
            ];
        }
        default:
            return null;
    }
};

router.get('/', loginPage);
router.post('/login', validate('login'), login);
router.get('/dashboard', dashboard);

module.exports = router;