const express = require('express');
const Member = require('./membermodel');
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const router = express.Router();

cloudinary.config({
    cloud_name: "dpobpe2ga",
    api_key: "528297887196318",
    api_secret: "jcpYq5B7_OEhB5nFK2gvgQmmqn8",
});


router.get('/members', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


router.post('/members',upload.single("avatar"), async (req, res) => {
    const member = new Member({
        name: req.body.name,
        designation : req.body.designation,
        hyperlink : req.body.hyperlink
    });
    try {
        await member.save();
        if (req.file) {
            cloudinary.uploader.upload(req.file.path,{resource_type: 'auto'}).then(async (result) => {
            member.imagelink = result.secure_url;
            await post.save();
          });
        }
        res.status(201).json(member);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;