'use strict';

const apiRoutes = require('./apis');

function init(server) {
    
    // config routes.
    server.use('/api', apiRoutes);
}

module.exports = {
    init: init
};