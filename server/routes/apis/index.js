const express = require('express');
const router = express.Router();
const handleError = require('../../middlewares/error');

const userRoute = require('./auth/user');
const mobileRoute = require('./auth/mobile');
const passwordRoute = require('./auth/password');
const emailRoute = require('./auth/email');
const articleRoute = require('./article');

// authentication middleware
const authenticate = require('../../middlewares/auth');

// routes
router.use('/users', userRoute);
router.use('/mobile', authenticate, mobileRoute);
router.use('/password', passwordRoute);
router.use('/email', emailRoute);
router.use('/articles', articleRoute);

// error middleware
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
