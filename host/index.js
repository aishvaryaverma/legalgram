const path = require('path');
const express = require("express");
const api = require('../api/app');
const admin = require('../web/app');

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

        // serving client application
        // const root = path.dirname(require.main.filename);
        
        // Serving static files
        // server.use(express.static(path.resolve(root, 'client', 'build')));
        // server.get('*', (req, res) => {
        //     res.sendFile(path.resolve(root, 'client', 'build', 'index.html'));
        // });
        
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
