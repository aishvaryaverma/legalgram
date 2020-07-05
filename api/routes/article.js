const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const { list, create, details, update } = require("../controllers/articles");

const validate = (method) => {
    switch (method) {
        case "create": {
            return [
                check("title", "Please enter title").notEmpty(),
                check("desc", "Please enter desc").notEmpty(),
                check("category", "Please enter desc").notEmpty()
            ];
        }                
        default:
            return null;
    }
};

router
    .get('/', list)
    .post('/', validate('create'), create)
    .get('/:id', details)
    .put('/:id', update)

module.exports = router;
