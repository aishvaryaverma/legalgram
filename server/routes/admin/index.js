const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const handleError = require('../../middlewares/admin/error');
const adminRoute = require('./admin');

// add middleware to parse urlencoded input data for admin router
router.use(cookieParser());
router.use(express.urlencoded({ extended: false }));

// routes
router.use('/', adminRoute);

// error handler
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
