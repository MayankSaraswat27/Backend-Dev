import user from "../model/userSchema.js";

export const getAllUsers = async(req,res)=>{
    try{
        const users = await user.find();
        res.status(200).json({
            success:true,
            users
        })
    }catch(error){
        console.log("cant get user", error)
    }
}