const { check } = require('express-validator');
const express = require('express');
const router = express.Router();
const { recover, resetToken, reset } = require('../../controllers/apis/password');


router.use('/recover', recover);
router.use('/resetToken', resetToken);
router.use('/reset', reset);

module.exports = router;