const express = require('express');
const router = express.Router();
const utils = require('../../shared/utils');


const userRoute = require('./user');
//const authRoute = require('./auth');
const mobileRoute = require('./mobile');

router.use('/users', userRoute);
router.use('/mobile', utils.verifyJWTToken, mobileRoute);
//router.use('/', authRoute);

module.exports = router
