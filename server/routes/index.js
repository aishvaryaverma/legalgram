'use strict';
const express = require('express');
const { handleError } = require('../shared/error');
const apiRoutes = require('./apis');

function init(server) {
    server.use(express.json({ extended: false }));
    
    // config routes.
    server.use('/api', apiRoutes);

    // error handler
    server.use((err, req, res, next) => {
        handleError(err, res);
    });
}

module.exports = {
    init: init
};