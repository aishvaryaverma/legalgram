const path = require('path');
const connectDB = require("../config/db");
const express = require('express');
const routes = require('./routes');
const handleError = require('./middlewares/error');

const app = express();

// connect database
connectDB();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/', routes);

// error middleware
app.use((err, req, res, next) => {
    handleError(err, res);
});


module.exports = app;