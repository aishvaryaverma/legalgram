const express = require('express');
const router = express.Router();
const authenticate = require('../../../middlewares/admin/auth');
const adminController = require('../../../controllers/admin');
const {
        dashboard,
        users,
        editUserForm,
        updateUser,
        usersList,
        logout
    } = adminController;

router
    .get('logout', logout)
    .get('/dashboard', authenticate, dashboard)
    .get('/users', authenticate, users)
    .get('/users/:id', authenticate, editUserForm)
    .post('/users/:id', authenticate, updateUser)
    .get('/users-list', authenticate, usersList);


      

module.exports = router;