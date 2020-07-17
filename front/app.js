const path = require('path');
const express = require('express');
const app = express();


// Serving static files
app.use(express.static(path.join(__dirname, '../client/build')));

// routes
//if(process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
//}

app.get('/testing', (req, res) => {
    res.send('this is a front route');
});


module.exports = app;