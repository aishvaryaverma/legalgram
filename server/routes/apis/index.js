const express = require('express');
let router = express.Router();

const userRoute = require('./user');
const authRoute = require('./auth');

router.use('/users', userRoute);
router.use('/', authRoute);

module.exports = router
