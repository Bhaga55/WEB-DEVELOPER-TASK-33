var jwt = require('jsonwebtoken');

function Authetication (req,res,next){
    console.log("Headers",req.headers.authorization)

    console.log("Authetication Hits");
    try {
        var decoded = jwt.verify("req.headers.authorization", 
            process.env.NODE_JWT_TOKEN_KEY);
        next();
      } catch(err) {
        // err
        return res.json(401).json({
            success:false,
            err:err.message,
            message:"Token Invalid or Expired",

        });
      }
      
    

    next();
}

module.exports = Authetication;