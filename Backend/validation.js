const jwt = require('jsonwebtoken');
let verifyUserLoggedIn = (req,res,next)=>{
    let token = req.headers['token'];
    console.log(token);
    jwt.verify(token , process.env.SECRET_KEY,(err,decoded)=>{
            if(!err){
                req.decoded = decoded
                next();
            }
            else{
                res.status(401).send({"Messege":"AUTHORIZATION ERROR !!!!! "})
            }
    })
}

let CheckEmployee=(req,res,next)=>{

    if(req.decoded.role =="employee"){
        next();
    }
    else{
        res.status(403).send({"Message":"NOT AN Employee "})
    }
}

let CheckStudent=(req,res,next)=>{

    if(req.decoded.role =="student"){
        next();
    }
    else{
        res.status(403).send({"Message":"NOT AN Student "})
    }
}


module.exports = {
    CheckEmployee,
    CheckStudent,
    verifyUserLoggedIn
}