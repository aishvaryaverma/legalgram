const { check } = require('express-validator');
const express = require('express');
const router = express.Router();
const userController = require('../../controllers/apis/users');
const { register, login } = userController;

const validate = (method) => {
    switch (method) {
      case 'login': {
       return [ 
          check('username', 'Please enter name or email').notEmpty(),
          check('password', 'Please enter password').notEmpty(),   
         ]
      }
      case 'register': {
        return [ 
           check('name', 'Please enter name').not().isEmpty(),
           check('email', 'Please enter a valid email').isEmail(),
           check('password', 'Please enter min 6 characters').isLength({min: 6}),
           check('mobile', 'Please enter a valid mobile').isLength({min: 7, max: 15}),
          ]
       }
      default: return null;
    }
}

router.post('/register', validate('register'), register);
router.post('/login', validate('login'), login);


module.exports = router