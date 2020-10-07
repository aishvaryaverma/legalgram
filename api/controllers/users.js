const User = require('../models/user');
const { 
    checkInputErrors,
    encryptPassword,
    getJWTToken
} = require('../shared/utils');

const register = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { name, email, mobile, password } = req.body;
        
        // Check if user is already registered
        await User.checkIfAlreadyExist(email, mobile);
        
        // Adding user into database using MODAL
        let user = new User({
            name,
			email,
			mobile,
			password
        });
        
        // encrpt password
        user.password = await encryptPassword(password);

        // Send and Save User to database using mongoose
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
		};

        // Generating jsonwebtoken
        const token = await getJWTToken(payload);
        const result = { 
            status: 'success', 
            message: 'User registered successfully', 
            data: { token }
        };
        res.status(200).json(result);
        
    } catch(err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        
        checkInputErrors(req);

        const { email, password, userType } = req.body;
        const user = await User.login({ email, password, userType });
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = await getJWTToken(payload);

        return res.status(200).json({ 
            status: 'success', 
            message: 'User login successfully', 
            data: { token }
        });
    }
    catch(err) {
        next(err);
    }
}

const list = async (req, res, next) => {
    try {
        const users = await User.find({ userType: 'user' }).select('-password');
        res.status(200).json({
            status: 'success',
            message: 'users list',
            data: {
                users
            }
        });
    }
    catch(err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    const id = req.params.id;
    await User.findById(id).updateOne({  isActive: req.body.status });

    res.status(200).json({
        status: 'success',
        message: 'user updated successfully'
    });
}

const me = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).populate('-password');

        res.status(200).json({
            status: 'success',
            message: 'user details',
            data: { user }
        });
    }
    catch(err) {
        next(err);
    }
}

const details = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            message: 'user details',
            data: { user }
        });
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    register,
    login,
    list,
    update,
    me,
    details
}
