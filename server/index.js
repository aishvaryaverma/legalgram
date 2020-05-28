"use strict";

const connectDB = require("../config/db");
const express = require("express");

module.exports = (function () {
    let server = express(),
        create,
        start;

    create = function (config) {
        console.log("server created");
        let routes = require("./routes");

        // Server settings
        server.set("port", config.port);
        server.set("hostname", config.hostname);

        // Set up routes
        routes.init(server);

        // connect database
        connectDB();
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
        start,
    };
})();
