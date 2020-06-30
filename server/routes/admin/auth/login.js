const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { login } = require('../../../controllers/admin/login');

const validate = (method) => {
    switch (method) {
        case "login": return [
            check("email", "Please enter email or mobile").notEmpty(),
            check("password", "Please enter password").notEmpty()
        ];
        default: return null;
    }
};

// login routes
router
    .get('/', login)
    .post('/login', validate('login'), login)

module.exports = router;