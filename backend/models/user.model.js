import mongoose from "mongoose";
// create UserSchema
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true, 
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilePic:{
        type:String,
        default:""
    }
},
{timestamps:true});

// create models for User;
const User = new mongoose.model("User",userSchema);

export default User;