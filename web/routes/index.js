const express = require('express');
const router = express.Router();

// middlewares
const authenticate = require('../middlewares/auth');

const loginRoute = require('./auth/login');
const passwordRoute = require('./auth/password');
const articleRoute = require('./article');
const usersRoute = require('./users');
const profileController = require('../controllers/profile');
const { dashboard, logout } = profileController;
const config = require('config');

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


module.exports = router;
