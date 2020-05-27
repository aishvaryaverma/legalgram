const server = require('./server');

// // connect database
// connectDB();

// // server start
// const PORT = 1337;
// app.listen(PORT, '127.0.0.1', () => console.log(`Server started at port ${PORT}`));

server.create({
    hostname: 'localhost',
    port: '1337'
});

server.start();