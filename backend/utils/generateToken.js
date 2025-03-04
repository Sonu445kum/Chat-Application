import jwt from "jsonwebtoken";


const generateTokenAndSetCookie =(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn:"30d"
    });

    // set cookie
    res.cookie("jwt",token,{
        maxAge:30*24*60*60*1000,
        httpOnly:true, // to prevent XSS attacks cross site scripting attacks 
        sameSite:"strict" // csrf attack cross site request forgery attacks
    });
};

export default generateTokenAndSetCookie