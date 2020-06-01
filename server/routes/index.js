const express = require('express');
const apiRoutes = require('./apis');
const { handleError } = require('../shared/error');

module.exports = {
    init: function(server) {
        server.use(express.json({ extended: false }));
        
        // config routes.
        server.use('/api', apiRoutes);
    
        // error handler
        server.use((err, req, res, next) => {
            handleError(err, res);
        });
    }
};
