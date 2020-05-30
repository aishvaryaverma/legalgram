const { validationResult } = require('express-validator');
const User = require('../../models/User');
const utils = require('../../shared/utils');
const { ErrorHandler } = require('../../shared/error');

const register = async (req, res, next) => {
    const { name, email, mobile, password } = req.body;
    
    const errors = validationResult(req);

	
    try {
        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        } 

        // Searching for user in database based on email id we got from request body
        let u_mobile = await User.findOne({ mobile })
        let u_email = await User.findOne({ email })
        
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
        user.password = await utils.encryptPassword(password);

        // Send and Save User to database using mongoose
        await user.save();

        const payload = {
            user: {
                id: user.id
            }
		};
		console.log(user)

        // Generating jsonwebtoken
        token = await utils.getJWTToken(payload);

        res.json({token: token, status: 200});
        
    } catch(err) {
        next(err);
    }
}

const login = async (req, res, next) => {
    try {
       
        const errors = validationResult(req);
    
        if(!errors.isEmpty()) {
            throw new ErrorHandler(400, errors.array());
        }
    
        const { username, password } = req.body; console.log(username);
        const user = await User.findOne({ $or: [{mobile: username}, {email: username}] });

        if(!user) {
            throw new ErrorHandler(400, 'Invalid user name');
        }

        const status =  await utils.comparePassword(password, user.password).catch((err) => {
            throw new ErrorHandler(400, err);
        })
    
        if(status) {
            const payload = {
                user: {
                    id: user.id
                }
            };
            const token = await  utils.getJWTToken(payload);
            return res.json({ token });
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