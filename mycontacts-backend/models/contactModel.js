const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a contact name"],
    },
    email: {
        type: String,
        required: [true, "Please provide a contact email"],
    },
    phone: {
        type: String,
        ruquired: [true, "Please provide a contact phone number"],
    }
},{
    timestamps: true,
})

module.exports = mongoose.model("Contact", contactSchema);