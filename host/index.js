const path = require('path');
const express = require("express");
const api = require('../api/app');
const admin = require('../web/app');
const front = require('../front/app');
const { from } = require('form-data');

module.exports = (function () {
    let server = express(),
        create,
        start;

    create = function (config) {
        // Server settings
        const { port, hostname } = config;

        server.set("port", port);
        server.set("hostname", hostname);

        // mount sub apps
        server.use('/api', api);
        server.use('/admin', admin);
        server.use('/', front);

        // catch the invalid routes
        server.get('*', (req, res) => {
            res.redirect('/');
        });
        
        console.log("server created");
    };

    start = function () {
        let hostname = server.get("hostname"),
            port = server.get("port");

        server.listen(port, hostname, () =>
            console.log(`Listening on - http://${hostname}:${port}`)
        );
    };

    return {
        create,
        start
    }
})();
