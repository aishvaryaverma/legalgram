const User = require('../../models/user');

const dashboard = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        res.render('dashboard');
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

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
        res.render('users/users');
    }
    catch(err) {
        next(err);
    }
}

const editUserForm = async (req, res, next) => {
    try { 
        const user = await User.findById(req.params.id);
        
        res.render('users/edit-user', { user });
    }
    catch(err) {
        next(err);
    }  
}

const updateUser = async (req, res, next) => {
    try {
        await (await User.findById(req.params.id)).updateOne({ isActive: req.body.status });
        res.redirect('/admin/users');
    }
    catch(err) {
        next(err);
    }   
}

const logout = (req, res) => {
    res.clearCookie('token').redirect('/admin');
}

module.exports = {
    dashboard,
    users,
    editUserForm,
    updateUser,
    usersList,
    logout
}