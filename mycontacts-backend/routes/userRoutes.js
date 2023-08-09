const express = require("express");
const { registerUser, loginUser, getCurrentUser } = require("../controller/userController");
const router = express.Router();

// POST /api/users/register
router.route("/register").post(registerUser);

// POST /api/users/login
router.route("/login").get(loginUser);

// GET /api/users/current
router.route("/current").get(getCurrentUser);

module.exports = router;