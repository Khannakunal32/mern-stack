const express = require("express");
const router = express.Router();

// endpoint /api/second/hello
router.route("/hello").get((req, res) => {
    res.status(200).json({ messaage: "calling second from routes" });
});

module.exports = router;