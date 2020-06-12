const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authenticate = require('../../../middlewares/admin/auth');
const adminController = require('../../../controllers/admin');
const { login, logout, loginPage, dashboard, users, editUserForm, updateUser, usersList } = adminController;

const validate = (method) => {
    switch (method) {
        case "login": {
            return [
                check("email", "Please enter email or password").notEmpty(),
                check("password", "Please enter password").notEmpty()
            ];
        }
        default:
            return null;
    }
};

router.get('/', loginPage);
router.post('/login', validate('login'), login);
router.get('/logout', authenticate, logout);
router.get('/dashboard', authenticate, dashboard);
router.get('/users', authenticate, users)
      .get('/users-list', authenticate, usersList)
      .get('/users/:id', authenticate, editUserForm)
      .post('/users/:id', authenticate, updateUser);

module.exports = router;