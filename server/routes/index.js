const express = require('express');
const cookieParser = require('cookie-parser');
const apiRoutes = require('./apis');
const adminRoutes = require('./admin');

module.exports = {
    init: function(server) {

        // parse input.
        server.use(cookieParser());
        server.use(express.urlencoded({ extended: false }));
    
        // configure routes for app front end.
        server.use('/api', apiRoutes);

        // configure routes for the admin section of app
        server.use('/admin', adminRoutes);
    }
};