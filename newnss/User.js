const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    profilePic: {
        type: String,
        default : ""
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
