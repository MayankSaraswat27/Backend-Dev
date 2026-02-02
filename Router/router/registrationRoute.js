import express from "express"


const router = express.Router();

const loginValidation = (req,res,next)=>{
    const token = req.query.token;

    if (token=="admin123") {
        next()
    }
    else{
        return res.send("access denied")
    }
}

router.get("/login",loginValidation,(req,res,next)=>{
    res.send("login is done")
})

router.get("/signup",(req,res)=>{
    res.send("signup is done")
})

export default router;