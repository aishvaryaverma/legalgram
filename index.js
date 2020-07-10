const server = require('./host');
const config = require('config');
const { hostname, port } = config.get('server');

server.create({
    hostname,
    port
});

server.start();
