const express = require('express');
const router = express.Router();
const utils = require('../../shared/utils');


const userRoute = require('./user');
const mobileRoute = require('./mobile');
const passwordRoute = require('./password');

router.use('/users', userRoute);
router.use('/mobile', utils.verifyJWTToken, mobileRoute);
router.use('/password', passwordRoute);

module.exports = router
