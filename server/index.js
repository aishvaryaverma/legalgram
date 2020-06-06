const path = require('path');
const express = require("express");
const connectDB = require("../config/db");
const routes = require("./routes");

module.exports = (function () {
    let server = express(),
        create,
        start;

    create = function (config) {
        // Server settings
        const { port, hostname } = config;
        server.set("port", port);
        server.set("hostname", hostname);

        // connect database
        connectDB();

        // Serving static files
        server.use(express.static(path.join(__dirname, 'public')));

        // setup view
        server.set('views', path.join(__dirname, 'views'));
        server.set('view engine', 'pug');
        
        // Set up routes
        routes.init(server);

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
