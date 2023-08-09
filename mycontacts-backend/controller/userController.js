const AsyncHandler = require("express-async-handler");

const registerUser = AsyncHandler(async (req, res) => {
  res.status(200).send("regsitered user");
});

const loginUser = AsyncHandler(async (req, res) => {
  res.status(200).send("user logged in");
});

const getCurrentUser = AsyncHandler(async (req, res) => {
  res.status(200).send("current user");
});

module.exports = { registerUser, loginUser, getCurrentUser };
