const path = require('path');
//const cors = require('cors');
const connectDB = require("../config/db");
const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/error');

const app = express();

// const corsOptions = {
//     origin: 'http://legalgram.in1.bytesun.io',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// connect database
connectDB();

app.use(cors(corsOptions));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);

// error middleware
app.use((err, req, res, next) => {
    handleError(err, res);
});


module.exports = app;