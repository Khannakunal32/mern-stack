const express = require("express");
const { registerUser, loginUser, getCurrentUser, deleteCurrentUser } = require("../controller/userController");
const router = express.Router();

// POST /api/users/register
router.route("/register").post(registerUser);

// POST /api/users/login
router.route("/login").get(loginUser);

// GET /api/users/current and DELETE /api/users/current
router.route("/current").get(getCurrentUser).delete(deleteCurrentUser);


module.exports = router;