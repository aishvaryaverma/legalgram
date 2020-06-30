const User = require('../../models/user');
const { checkInputErrors, getJWTToken } = require('../../shared/utils');

const login = async (req, res, next) => { 
    try {
        
        if (req.method === 'GET') {
            res.render('login');
        }
        else {
            checkInputErrors(req);

            const { email, password } = req.body;
            const user = await User.login({ email, password, userType: 'admin' });
            // create jwt token and save it in a cookie
            const payload = {
                user: {
                    id: user.id,
                    name: user.name
                }
            };
            const token = await getJWTToken(payload);
    
            res.status(200)
               .cookie('token', token, { httpOnly: true })
               .redirect('dashboard');
        }
    }
    catch(err) {
        err.page = 'login';
        next(err);
    }
}

module.exports = {
    login
}