const express = require("express");
const { registerUser, loginUser, getCurrentUser, deleteCurrentUser } = require("../controller/userController");
const validateTokenHandler = require("../middleware/validateTokenHandler");
const router = express.Router();

// POST /api/users/register
router.route("/register").post(registerUser);

// POST /api/users/login
router.route("/login").get(loginUser);

// GET /api/users/current and DELETE /api/users/current
router.route("/current").get(validateTokenHandler, getCurrentUser).delete(validateTokenHandler, deleteCurrentUser);


module.exports = router;