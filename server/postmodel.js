const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    hashtag: {
        type: String,
    },
    date : {
        type: Date,
        default: Date.now
    },
    instalink: {
        type: String,
    },
    twitterlink: {  
        type: String,
    },
    imagelink: {
        type: String,
    }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;