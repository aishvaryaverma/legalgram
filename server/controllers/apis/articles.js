const Article = require('../../models/article');

const details = async (req, res, next) => {
    const articles = await Article.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        message: 'Artcle details',
        data: article
    });
}

const list = async (req, res, next) => {
    try {
        const articles = await Article.find({});
        const result = { 
            status: 'success', 
            message: 'Artcles list', 
            data: { articles }
        };
        res.status(200).json(result);
    }
    catch(err) {
        next(err);
    }
}

const create = async (req, res, next) => {
   
    try {
        const file = req.file;
        const { title, desc, category, activeStatus } = req.body;
        const author = req.user.id;

        const article = new Article({
            title,
            desc,
            author,
            category,
            activeStatus
        });

        if (file) {
            article.imagePath = file.filename
        }
       
        await article.save();
        res.status(200).json({
            status: 'success',
            message: 'Articles created successfully'
        });
                 
    }
    catch(err) {
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;
        const file = req.file;
        const { title, desc, category, activeStatus } = req.body;
        const article = {
            title,
            desc,
            category,
            activeStatus
        };

        if (file) {
            article.imagePath = file.filename
        }

        await Article.findById(id).updateOne(article);

        res.status(200).json({
            status: 'success',
            message: 'Articles created successfully'
        }); 
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    list,
    create,
    update,
    details
}