const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const handleError = require('./middlewares/error');
const routes = require('./routes');

const app = express();

// serve static assets
app.use(express.static(path.join(__dirname, 'public')));

// setup view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// set up middleware to parse input data
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// setup routes
app.use('/', routes);

// error middleware
app.use((err, req, res, next) => {
    handleError(err, res);
});

module.exports = app;