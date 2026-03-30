import {userData} from "../model/data.js"

export const userInfo = (req,res)=>{
    res.status(200).json({
        message: "user information",
        userData
    })
}