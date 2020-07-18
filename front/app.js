const path = require('path');
const express = require('express');
const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, '../client/build')));

// routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// catch the invalid routes
app.get('*', (req, res) => {
    res.redirect('/');
});


module.exports = app;