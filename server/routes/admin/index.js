const express = require('express');
const router = express.Router();
const authController = require('../../controllers/admin/auth');
const { login } = authController;

router.post('/login', login);

module.exports = router;
