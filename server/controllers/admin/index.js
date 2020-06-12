const User = require('../../models/user');
const { comparePassword, checkInputErrors, getJWTToken } = require('../../shared/utils');

const loginPage = (req, res) => {
    try {
        res.render('login');
    }
    catch(err) {
        console.log(err);
    }
}

const login = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { email, password } = req.body;
        const user = await User.findOne({ $or: [{ email }, { mobile: email }], userType: 'admin' });

        if(!user) {
            throw new Error('Invalid email or mobile number');
        }

        await comparePassword(password, user.password)
        .catch(err => {
            throw new Error('Invalid password');
        });

        // create jwt token and save it in a cookie
        const payload = {
            user: {
                id: user.id,
                name: user.name
            }
        };
        const token = await  getJWTToken(payload);

        res.status(200)
        .cookie('token', token, { httpOnly: true })
        .redirect('dashboard');
    }
    catch(err) {
        err.page = 'login';
        next(err);
    }
}

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
        res.render('users');
    }
    catch(err) {
        next(err);
    }
}

const editUserForm = async (req, res, next) => {
    try { 
        const user = await User.findById(req.params.id);
        
        res.render('edit-user', { user });
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
    login,
    logout,
    loginPage,
    dashboard,
    users,
    editUserForm,
    updateUser,
    usersList
}