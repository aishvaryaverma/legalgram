const User = require('../../models/User');
const { 
    checkInputErrors,
    encryptPassword,
    comparePassword, 
    getJWTToken
} = require('../../shared/utils');
const { ErrorHandler } = require('../../shared/error');

const register = async (req, res, next) => {
    try {
        checkInputErrors(req);

        const { name, email, mobile, password } = req.body;
        
        // Searching for user in database based on email id we got from request body
        let u_mobile = await User.findOne({ mobile });
        let u_email = await User.findOne({ email });
        
        // Check if user is already registered
        if(u_mobile || u_email) {
            throw new ErrorHandler(400, 'User already exists');
        }
        
        // Adding user into database using MODAL
        user = new User({
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
        console.error(err.message);
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
        
        checkInputErrors(req);

        const { username, password } = req.body;
        const user = await User.findOne({ $or: [{mobile: username}, {email: username}] });

        if(!user) {
            throw new ErrorHandler(400, 'Invalid credentials');
        }

        const status =  await comparePassword(password, user.password).catch((err) => {
            throw new ErrorHandler(400, err);
        })
    
        if(status) {
            const payload = {
                user: {
                    id: user.id
                }
            };
            const token = await  getJWTToken(payload);
            const result = { 
                status: 'success', 
                message: 'User login successfully', 
                data: { token }
            };
            return res.status(200).json({ result });
        }
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