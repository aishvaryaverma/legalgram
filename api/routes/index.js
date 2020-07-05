const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'api/public/uploads' });

// middlewares
const authenticate = require('../middlewares/auth');

// routes
const userRoute = require('./auth/user');
const mobileRoute = require('./auth/mobile');
const passwordRoute = require('./auth/password');
const emailRoute = require('./auth/email');
const articleRoute = require('./article');

// handle file uploads
router.post('/upload', authenticate, upload.single('avatar'), (req, res, next) => {
    try { console.log(req.file);
        res.status(200).json({
            status: 'success',
            message: 'file uploaded successfully',
            data: {
                filename: req.file.filename
            }
        });
    }
    catch(err) {
        next(err);
    }
});

// parse input data
router.use(express.json({ extended: false }));

// routes
router.use('/users', userRoute);
router.use('/mobile', authenticate, mobileRoute);
router.use('/password', passwordRoute);
router.use('/email', emailRoute);
router.use('/articles', authenticate, articleRoute);

module.exports = router;
