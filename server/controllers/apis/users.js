const User = require('../../models/user');
const { 
    checkInputErrors,
    encryptPassword,
    getJWTToken
} = require('../../shared/utils');
const { ErrorHandler } = require('../../shared/error');
const user = require('../../models/user');

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

        const { email, password } = req.body;
        const user = await User.login({ email, password });
        const payload = {
            user: {
                id: user.id
            }
        };
        const token = await getJWTToken(payload);
        const result = { 
            status: 'success', 
            message: 'User login successfully', 
            data: { token }
        };

        return res.status(200).json({ result });
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    register,
    login
}