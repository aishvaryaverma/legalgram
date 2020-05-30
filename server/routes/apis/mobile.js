const { check } = require('express-validator');
const express = require('express');
const router = express.Router();
const { sendOTP, verifyOTP} = require('../../controllers/apis/mobile');

const validate = (method) => {
    switch (method) {
      case 'verify-otp': {
        return [ 
           check('otp', 'Please enter valid otp').notEmpty()
          ]
       }
      default: return null;
    }
}

router.use('/send-otp', sendOTP);
router.use('/verify-otp', validate('verify-otp'), verifyOTP);


module.exports = router;