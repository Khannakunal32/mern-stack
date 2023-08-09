const AsyncHandler = require("express-async-handler");
// for password encryption
const bcrypt = require("bcrypt");
// import model of user
const User = require("../models/userModel");
// import jsonwebtoken
const jwt = require("jsonwebtoken");

//@desc register user
//@route POST /api/users/register
//@access Public
const registerUser = AsyncHandler(async (req, res) => {
  // checking for all fields are present
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  // checking if user already exists
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // creating user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });
  res.status(201).json({ _id: user._id, email: user.email });
});

//@desc login user
//@route GET /api/users/login
//@access Public
const loginUser = AsyncHandler(async (req, res) => {
  // checking for all fields are present
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password to login");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  //compare password with hashed password
  if (await bcrypt.compare(password, user.password)) {
    // generating access token
    const accessToken = jwt.sign(
      {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
      process.env.JWT_SECRET,
      { expiresIn: "15s" }
    );
    res.status(200).json(accessToken    );
  }
  res.status(401).send("user password wrong, unothorized");
});

//@desc get current user
//@route GET /api/users/current
//@access Public
const getCurrentUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // checking for all fields are present
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).send(user);
});

//@desc deletes current user
//@route DELETE /api/users/current
//@access Public
const deleteCurrentUser = AsyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // checking for all fields are present
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please provide name, email and password");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  await User.findOneAndRemove({ email });

  res.status(200).send("current user deleted");
});

module.exports = { registerUser, loginUser, getCurrentUser, deleteCurrentUser };
