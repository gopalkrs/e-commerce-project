const jwt = require('jsonwebtoken');

const authentication = (req, res, next)=>{
    const authHeader = req.headers['authorization'];

    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(401).json({
            status: "Unauthorized",
            message: "Authorization failed, try after logging again."
        });
    }
    try{
        const verified = jwt.verify(token, process.env.MY_SECRET_KEY);
        req.user = verified;
        next();
    }catch(err){
        return res.status(404).json({
            status: "failed",
            message: "Invalid token"
        });
    }
}

module.exports = authentication;