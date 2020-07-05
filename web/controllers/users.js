const apiClient = require('../shared/apiClient');

const usersList = async (req, res, next) => {
    try { 
        const { data } = await apiClient.get('/users/list', {
            headers: { 'Authorization': req.cookies.token }
        });
        res.status(200).json({
            status: 'success',
            data,
            message: 'users list'
        }); 
    }
    catch(err) {
        next(err);
    }
}

const users = async (req, res, next) => {
    try {
        res.render('users/list');
    }
    catch(err) {
        next(err);
    }
}

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (req.method === 'GET') {
            const result = await apiClient.get(`/users/${id}`, {
                headers: { 'Authorization': req.cookies.token }
            });
            res.render('users/edit', { user: result.data.user });
        }
        else {
            await apiClient.put(`/users/${id}`, { status: req.body.status }, {
                headers: { 'Authorization': req.cookies.token }
            });
            res.redirect('/admin/users');
        }
    }
    catch(err) {
        next(err);
    }   
}

module.exports = {
    users,
    updateUser,
    usersList
}