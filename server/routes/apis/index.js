const express = require('express');
const router = express.Router();

// routes
const userRoute = require('./auth/user');
const mobileRoute = require('./auth/mobile');
const passwordRoute = require('./auth/password');
const emailRoute = require('./auth/email');

// middlewares
const auth = require('../../middlewares/auth');

router.use('/users', userRoute);
router.use('/mobile', auth, mobileRoute);
router.use('/password', passwordRoute);
router.use('/email', emailRoute);

module.exports = router;
