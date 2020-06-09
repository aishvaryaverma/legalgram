const express = require('express');
const router = express.Router();
const handleError = require('../../middlewares/error');

// routes
const userRoute = require('./auth/user');
const mobileRoute = require('./auth/mobile');
const passwordRoute = require('./auth/password');
const emailRoute = require('./auth/email');

// middlewares
const auth = require('../../middlewares/auth');

// add middleware to parse json input data for api router
router.use(express.json({ extended: false }));

router.use('/users', userRoute);
router.use('/mobile', auth, mobileRoute);
router.use('/password', passwordRoute);
router.use('/email', emailRoute);

// error handler
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
