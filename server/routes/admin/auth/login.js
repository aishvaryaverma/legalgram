const express = require('express');
const router = express.Router();
const { login } = require('../../../controllers/admin/login');

// login routes
router
    .get('/', login)
    .post('/login', login)

module.exports = router;