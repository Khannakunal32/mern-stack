const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateTokenHandler = expressAsyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;

    if(authHeader && authHeader.startsWith("Bearer")){
        const token = authHeader.split(" ")[1];
         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if(err){
                res.status(401);
                throw new Error("Invalid Token");
            }
            req.user = decoded.user;
        });
        next();
    }
    else{
        res.status(404);
        throw new Error("No token, authorization failed");
    }
});

module.exports = validateTokenHandler;