const express = require("express");
const router = express.Router();
const { check } = require('express-validator');
const { list, create, details, update, comment, like, deleteArticle } = require("../controllers/articles");

const validate = (method) => {
    switch (method) {
        case "create":
            return [
                check("title", "Please enter title").notEmpty(),
                check("desc", "Please enter description").notEmpty(),
                check("category", "Please select category").notEmpty()
            ];
        case "comment":
            return [
                check("text", "Please enter comments text").notEmpty()
            ];
        default:
            return null;
    }
};

router
    .get('/', list)
    .post('/', validate('create'), create)
    .get('/:id', details)
    .put('/:id', validate('create'), update)
    .put('/:id/comment', validate('comment'), comment)
    .put('/:id/like', like)
    .delete('/:id', deleteArticle)

module.exports = router;
