const Article = require('../../models/article');
const { checkInputErrors } = require('../../shared/utils');
const { ErrorHandler } = require('../../shared/error');

const details = async (req, res, next) => {
    try {
        const article = await Article.findById(req.params.id).populate('author', 'name'); console.log(article);
        res.status(200).json({
            status: 'success',
            message: 'Artcle details',
            data: { article }
        });
    }
    catch(err) {
        next(err);
    }
}

const list = async (req, res, next) => {
    try {
        let pagination = {};
        const { offset, limit } = req.query;

        if (offset && !/^\d+$/.test(offset)) {
            throw new ErrorHandler(400, 'Invalid offset parameter');
        }

        if (offset && !/^\d+$/.test(limit)) {
            throw new ErrorHandler(400, 'Invalid limit parameter');
        }

        if(offset) {
            pagination.skip = parseInt(offset);
        }

        if(limit) {
            pagination.limit = parseInt(limit);
        }

        const count = await Article.countDocuments();
        const articles = await Article.find(null, null, pagination).populate('author','name' );
        const result = { 
            status: 'success',
            message: 'Artcles list',
            data: { articles, count }
        };
        res.status(200).json(result);
    }
    catch(err) {
        next(err);
    }
}

const create = async (req, res, next) => {
   
    try {
        checkInputErrors(req);

        const { title, desc, category, activeStatus, imagePath } = req.body;
        const author = req.user.id;

        let article = new Article({
            title,
            desc,
            author,
            category,
            activeStatus,
        });

        if(imagePath) {
            article.imagePath = imagePath;
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
        const { title, desc, category, activeStatus, imagePath } = req.body;
        let article = {};

        if (title) {
            article.title = title;
        }

        if (desc) {
            article.desc = desc;
        }

        if (category) {
            article.category = category;
        }

        if (activeStatus) {
            article.activeStatus = activeStatus;
        }

        if (imagePath) {
            article.imagePath = imagePath;
        }

        console.log(article);
        
        await Article.findById(id).updateOne(article);

        res.status(200).json({
            status: 'success',
            message: 'Articles updated successfully'
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