const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// middleware to pass json request body
app.use(express.json());


// 1 method directly in server.js
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// 2 method calling from routes folder
app.use("/api/second", require("./routes/secondExampleRoutes"));

// 3 method using routes with controller
app.use("/api/contacts", require("./routes/contactRoutes"));

// error handler middleware
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
