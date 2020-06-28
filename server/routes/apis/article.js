const express = require("express");
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
const router = express.Router();
const { check } = require("express-validator");
const { list, create, details, update } = require("../../controllers/apis/articles");

const validate = (method) => {
    switch (method) {
        case "verify": {
            return [check("email", "Please enter valid email").notEmpty()];
        }
        default:
            return null;
    }
};

router
    .get('/', list)
    .post('/', upload.single('avatar') ,create)
    .get('/:id', details)
    .put('/:id', update)

module.exports = router;
