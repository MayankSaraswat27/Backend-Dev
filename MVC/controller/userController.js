import {userData} from "../model/data.js";
const alluser = ((req,res)=>{
    res.json({
        message: "All user",
        userDataInfo: userData
    })
});

const createuser = ((req,res)=>{
    const {name,email} = req.body;

    let newUser = {
        id:userData.length+1,name:name,email:email
    }
    userData.push(newUser);
    res.json({message:"User Created"});
});

export {alluser,createuser};