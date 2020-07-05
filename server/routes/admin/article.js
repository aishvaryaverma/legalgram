const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer({ dest: 'server/public/uploads' });
const { create, update, list } = require('../../controllers/admin/article');

router.get('/', list)
      .get('/new', create)
      .post('/new', upload.single('avatar'), create)
      .get('/:id', update)
      .post('/:id', upload.single('avatar'), update)

module.exports = router;