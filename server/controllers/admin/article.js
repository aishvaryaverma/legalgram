const Article = require('../../models/article');

const list = async (req, res, next) => {
    try {
        let { page, limit } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        if (!page || page < 0) {
            page = 1;
        }

        if (!limit || limit < 0) {
            limit = 10;
        }
        const offset = (page - 1) * limit;
        const totalArticles = await Article.count();
        const totalPages = Math.ceil(totalArticles / limit);
        const articles = await Article.find(null, null, { skip: offset, limit }).populate('author'); console.log({ articles, totalPages, limit })
        
        res.status(200).render('article/list', { articles, totalPages, page, limit });
    }
    catch(err) {
        next(err);
    }
}

const create = async (req, res, next) => {
   
    try {
        if (req.method === 'GET') {
            res.render('article/add');
        }   
        else {
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
    
            res.status(200).redirect('/admin/articles')
        }
        
    }
    catch(err) {
        err.page = 'article/add';
        next(err);
    }
}

const update = async (req, res, next) => {
    try {
        const id = req.params.id;

        if (req.method === 'GET') {
            const article = await Article.findById(id);
            res.status(200).render('article/edit', { article });
        }
        else {
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
    
            res.status(200).redirect('/admin/articles');
        }
    }
    catch(err) {
        err.page = 'article/edit';
        next(err);
    }
}

module.exports = {
    list,
    create,
    update
}