const apiClient = require('../shared/apiClient');
const { checkInputErrors } = require('../shared/utils');

const login = async (req, res, next) => {
    try {
        
        if (req.method === 'GET') {
            res.render('login');
        }
        else {
            checkInputErrors(req);

            const { email, password } = req.body;
            
            const result = await apiClient.post('/users/login', {
                email,
                password,
                userType: 'admin'
            }); res.json(result);
    
            res.status(200)
               .cookie('token', result.data.token, { httpOnly: true })
               .redirect('dashboard');
        }
    }
    catch(err) { res.json(err);
        err.page = 'login';
        next(err);
    }
}

module.exports = {
    login
}