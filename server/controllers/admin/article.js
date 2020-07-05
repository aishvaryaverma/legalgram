const apiClient = require('./apiClient');
const FormData = require('form-data');
const fs = require('fs');

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
        const result = await apiClient.get(`/articles?offset=${offset}&&limit=${limit}`, {
            headers: { 'Authorization': req.cookies.token }
        });
        const articles = result.data.articles;
        const totalArticles = result.data.count;
        const totalPages = Math.ceil(totalArticles / limit);

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

            let article = {
                title,
                desc,
                category,
                activeStatus
            };
    
            if (file) {
                const result = await uploadImage(file.filename, req.cookies.token); console.log(result.data.filename);
                article.imagePath = result.data.filename;
            }

            await apiClient.post('/articles', article, {
                headers: { 'Authorization': req.cookies.token }
            });
            
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
            const result = await apiClient.get(`/articles/${id}`, {
                headers: { 'Authorization': req.cookies.token }
            });
            res.status(200).render('article/edit', { article: result.data.article });
        }
        else {
            const file = req.file;
            const { title, desc, category, activeStatus, imagePath } = req.body;
    
            const article = {
                title,
                desc,
                category,
                imagePath,
                activeStatus
            };

            if (file) {
                const result = await uploadImage(file.filename, req.cookies.token);
                article.imagePath = result.data.filename;
            }

            await apiClient.put(`/articles/${id}`, article, {
                headers: { 'Authorization': req.cookies.token }
            });
    
            res.status(200).redirect('/admin/articles');
        }
    }
    catch(err) {
        err.page = 'article/edit';
        next(err);
    }
}

const uploadImage = async (filename, token) => {
    try {
        const file = `server/public/uploads/${filename}`;
        const form_data = new FormData();
        form_data.append('avatar', fs.createReadStream(file));
    
        const request_config = {
            headers: {
                ...form_data.getHeaders(),
                'Authorization': token
            }
        };
    
        const result = await apiClient.post('/upload', form_data, request_config);
        fs.unlinkSync(file);
        
        return result;
    }
    catch(err) {
        next(err);
    }
}

module.exports = {
    list,
    create,
    update
}