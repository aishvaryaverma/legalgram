const express = require('express');
const apiRoutes = require('./apis');
const adminRoutes = require('./admin');

module.exports = {
    init: function(server) {
    
        // configure routes for app front end.
        server.use('/api', apiRoutes);

        // configure routes for the admin section of app
        server.use('/admin', adminRoutes);
    }
};