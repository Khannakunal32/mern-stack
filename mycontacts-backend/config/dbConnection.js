const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        const db = connect.connection;
        console.log(`MongoDB connected: ${db.host} ${db.name} `);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;