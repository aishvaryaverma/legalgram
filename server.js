const express = require('express');
const app = express();
const connectDB = require('./config/db');

// connect database
connectDB();

// middlewares
app.use(express.json({ extended: false }));

// routes
app.use('/api/users', require('./routes/api/user'));

// server start
const PORT = 1337;
app.listen(PORT, '127.0.0.1', () => console.log(`Server started at port ${PORT}`));
