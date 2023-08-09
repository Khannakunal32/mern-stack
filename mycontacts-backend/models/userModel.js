const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a user name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a user email"],
        unique: [true, "Email already exists"],
    },
    password: {
        type: String,
        required: [true, "Please provide a user password"],
    }
},{
    timestamps: true,
});

module.exports = mongoose.model("User", userScheme);