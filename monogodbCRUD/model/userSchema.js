import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxLength:[25,"Name must contain 25 char only"]
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minLength:[8,"Password must contain atleast 8 char"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    }
});

const user = mongoose.model("User", userSchema);

export default user;