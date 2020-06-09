const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const handleError = require('../../middlewares/admin/error');
const authRoute = require('./auth');

// add middleware to parse urlencoded input data for admin router
router.use(cookieParser());
router.use(express.urlencoded({ extended: false }));

// routes
router.use('/', authRoute);

// error handler
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
