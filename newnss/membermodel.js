const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    imagelink: {
        type: String,
        default:"",
    },
    designation: {
        type: String,
    },
    hyperlink: {
        type: String,
    },
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;