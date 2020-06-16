const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const handleError = require('../../middlewares/admin/error');
const adminRoute = require('./admin');
const authRoute = require('./auth');
const config = require('config');

// add middleware to parse urlencoded input data for admin router
router.use(cookieParser());
router.use(express.urlencoded({ extended: false }));

// set up some variables to be accessible everywhere and in pug templates
router.use((req, res, next) => {
    const { hostname, port} = config.get('server');
    res.locals.baseUrl = `http://${hostname}:${port}/admin`
    res.locals.path = req.path;
    next();
});

// routes
router.use('/', authRoute);
router.use('/', adminRoute);

// error handler
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
