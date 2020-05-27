const { check, validationResult } = require('express-validator');
const config = require('config');
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const otpGenerator = require('otp-generator');
const utils = require('../../shared/utils');

const register = async (req, res) => {
	// Validation
    await check('name', 'Please enter name').not().isEmpty().run(req);
    await check('email', 'Please enter a valid email address').isEmail().run(req);
    await check('mobile', 'Please enter a mobile number').isLength({ min: 7, max: 15 }).run(req);
    await check('password', 'Please enter min 6 characters').isLength({ min: 6 }).run(req);
	
	// Pushing validation result in errors const
    const errors = validationResult(req);

    // Checking is there is an error
    if(!errors.isEmpty()) {
        // Sending error response
        return res.status(400).json({ errors: errors.array() })
    }
    
    // Pulling data from request body
    const { name, email, mobile, password } = req.body;
    
	console.log(otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false, specialChars: false }));
	
    try {
        // Searching for user in database based on email id we got from request body
        let u_mobile = await User.findOne({ mobile })
        let u_email = await User.findOne({ email })
        
        // Check if user is already registered
        if(u_mobile || u_email) {
            // Sending error response
            return res.status(400).json({ errors: [{ msg: 'User already exists.' }] })
		}
		
        // Adding user into database using MODAL
        user = new User({
            name,
			email,
			mobile,
			password
        });
        // *************
        //ENCRYPT PASSWORD
        
        // Creating a salt for password
        const salt = await bcrypt.genSalt(10);

        // Hash Password
        user.password = await bcrypt.hash(password, salt);

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

        res.json({token});
        
    } catch(err) {
        // Sending error response
        console.error(err);
        res.status(500).send('Server Error');
    }
}

const login = (req, res) => {
    return res.json(123);
}

module.exports = {
    register,
    login
}