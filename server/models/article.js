const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    desc: String,
    category: String,
    activeStatus: { type: Boolean, default: false },
    imagePath: String,
    author: mongoose.ObjectId,
    likes: { type: Number, default: 0 },
    publishedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('article', articleSchema);