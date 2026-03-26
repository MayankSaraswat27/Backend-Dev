import user from "../model/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async(req,res)=>{
    try {
        const { name, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await user.create({
            name,
            email,
            password:hashedPassword
        });

        res.status(201).json({
            success: true,
            message: "User created successfully",
            newUser
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server error",
            error:error.message
        });
    }
}