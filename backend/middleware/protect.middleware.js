import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

 export const protect = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;//get token from cookie
        
        //check if token exists
        if(!token){
            return res.status(401).json({
                error:"Unauthorized - No token Provided"
            })
        }

        //verify token
        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decoded){
            return res.status(401).json({
                error:"Unauthorized - Invalid Token"
            })
        }
        //check user is exists or not
        const user =await User.findById(decoded.userId).select("-password");
        if(!user){
            return res.status(401).json({
                error:" User not found"
                })
        }
        //if user is exists then add user to req
        req.user = user;
    
        next();
    } catch (error) {
        console.log("Error in protect middleware",error.message);
        return res.status(500).json({
            error:"Internal Server Error"
            })
    }
};

