const express = require('express');
const router = express.Router();
const userController = require('../../controllers/apis/users');
const { register, login } = userController;

router.post('/register', userController.validate('register'), register);
router.post('/login', userController.validate('login'), login);

module.exports = router