
const dashboard = async (req, res, next) => {
    try {
        res.render('dashboard');
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

const logout = (req, res) => {
    res.clearCookie('token').redirect('/admin');
}

module.exports = {
    dashboard,
    logout
}