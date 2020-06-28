const User = require('../../models/user');

const usersList = async (req, res, next) => {
    try {
        const users = await User.find({ userType: 'user' });

        res.status(200).json({
            status: 'success',
            data: { users },
            message: 'users list'
        }); 
    }
    catch(err) {
        console.log(err);
    }
    
}

const users = async (req, res, next) => {
    try {
        const users = await User.find({ userType: 'user' });
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
            const user = await User.findById(id);
            res.render('users/edit', { user });
        }
        else {
            await (await User.findById(id)).updateOne({ isActive: req.body.status });
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