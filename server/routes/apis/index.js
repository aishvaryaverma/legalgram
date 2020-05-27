const express = require('express');
let router = express.Router();

const userRoute = require('./user');

router.use('/users', userRoute);

module.exports = router
