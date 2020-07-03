const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const handleError = require('../../middlewares/admin/error');
const loginRoute = require('./auth/login');
const passwordRoute = require('./auth/password');
const articleRoute = require('./article');
const usersRoute = require('./users');
const profileController = require('../../controllers/admin/profile');
const { dashboard, logout } = profileController;
const authenticate = require('../../middlewares/admin/auth');
const config = require('config');

// parse input data
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
router.use('/', loginRoute);
router.use('/password', passwordRoute);
router.use('/users', authenticate, usersRoute);
router.use('/articles', authenticate, articleRoute);
router.get('/logout', logout);
router.get('/dashboard', authenticate, dashboard);

// error middleware
router.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = router;
