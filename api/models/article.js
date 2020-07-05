const User = require('./user');
const mongoose = require('mongoose');

const opts = { toJSON: { virtuals: true } };
const articleSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    category: { type: String, required: true },
    activeStatus: { type: Boolean, default: false },
    imagePath: String,
    author: { type: mongoose.ObjectId, ref: User },
    likes: { type: Number, default: 0 },
    publishedOn: { type: Date, default: Date.now }
}, opts);

articleSchema.virtual('publishedOnStr').get(function () {
    const seconds = (Date.now() - new Date(this.publishedOn).getTime()) / 1000;
    let timeElapsed;

    if (Math.floor(seconds / (86400))) {
        timeElapsed = Math.floor(seconds / 86400);
        timeElapsed = timeElapsed + (timeElapsed > 1 ? ' days ':' day ') + ' ago';
    }
    else if(Math.floor(seconds / 3600)) {
        timeElapsed = Math.floor(seconds / 3600);
        timeElapsed = timeElapsed + (timeElapsed > 1 ? ' hours ':' hour ') + ' ago';
    }
    else if (Math.floor(seconds / 60)) {
        timeElapsed = Math.floor(seconds / 60);
        timeElapsed = timeElapsed + (timeElapsed > 1 ? ' minutes ':' minute ') + ' ago';
    }
    else {
        timeElapsed = Math.floor(seconds);
        timeElapsed = timeElapsed + (timeElapsed > 1 ? ' seconds ':' second ') + ' ago';
    }

    return timeElapsed;
});
  

module.exports = mongoose.model('article', articleSchema);