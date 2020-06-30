const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/admin/users');
const { users, updateUser, usersList } = usersController;

router
    .get('/', users)
    .get('/list', usersList)
    .get('/:id', updateUser)
    .post('/:id', updateUser);


module.exports = router;