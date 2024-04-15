const express = require('express');
const Post = require('./postmodel');
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

cloudinary.config({
    cloud_name: "dpobpe2ga",
    api_key: "528297887196318",
    api_secret: "jcpYq5B7_OEhB5nFK2gvgQmmqn8",
});

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/',upload.single("avatar"), async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
        hashtag: req.body.hashtag,
        date: req.body.date,
        instalink: req.body.instalink,
        twitterlink: req.body.twitterlink,
    });
    try {
        await post.save();
        if (req.file) {
            cloudinary.uploader.upload(req.file.path,{resource_type: 'auto'}).then(async (result) => {
            post.imagelink = result.secure_url;
            await post.save();
          });
        }
        res.status(201).json(post);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;