import user from "../model/userSchema.js";

export const getAllUsers = async(req,res)=>{
    try{
        const users = await user.find();
        res.status(200).json({
            success:true,
            users
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Something went wrong"
        })
    }
}

export const createUser = async(req,res)=>{
    try{
        const { name, email, password, role } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All required fields must be filled"
            });
        }
        const newUser = await user.create({
            name,
            email,
            password,
            role
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser
        });
    }catch(error){
        console.log("Error creating user:", error);
    }
}

