const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'web/public/uploads' });
const { create, update, list, deleteArticle } = require('../controllers/article');

router.get('/', list)
      .get('/new', create)
      .post('/new', upload.single('avatar'), create)
      .get('/edit/:id', update)
      .post('/edit/:id', upload.single('avatar'), update)
      .get('/delete/:id', deleteArticle)

module.exports = router;