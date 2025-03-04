import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

//create a methods for login,signUp,logout;

//SignUp;
export const signUp = async (req, res) => {
    try {
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        // check for matching passwords
        if(password !== confirmPassword){
            return res.status(400).json({
                error:"Passwords do not match"
            });
        }
        // check for existing user
        const existingUser = await User.findOne({userName});
        if(existingUser){
            return res.status(400).json({
                error:"User already exists"
            });
        }

        // Hash the password
        // salt 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);


        //https://avatar-placeholder.iran.liara.run/document/#username
        const boyProfilePic =`https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic =`https://avatar.iran.liara.run/public/girl?username=${userName}`;

        // create new User
        const newUser = new User({
            fullName,
            userName,
            password:hashedPassword,
            gender,
            profilePic:gender === 'male'? boyProfilePic:girlProfilePic
        });
        // save the user
        if(newUser){
            // Generate JWT Token
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

        // send response
        res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        });
        }else{
            res.status(400).json({
                error:"Failed to create user"
            });
        }
    } catch (error) {
        console.log("Error in SignUp Controller",error.message);
        res.status(500).json({
            error:"Internal Server Error"
        });
        
    }
};

//login;
export const login = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
};

//logout;
export const logout = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}