const express = require('express');
const apiRoutes = require('./apis');
const adminRoutes = require('./admin');
const handleError = require('../middlewares/error');

module.exports = {
    init: function(server) {
        server.use(express.json({ extended: false }));
        
        server.get('/', (req, res) => {
            res.render('login', { title: 'Legalgram', message: 'Legalgram!' })
        });

        // configure routes for app front end.
        server.use('/api', apiRoutes);

        // configure routes for the admin section of app
        server.use('/admin', adminRoutes);
    
        // error handler
        server.use((err, req, res, next) => {
            handleError(err, res);
        });
    }
};