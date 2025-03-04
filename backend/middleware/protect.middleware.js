import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protect = async (req, res, next) => {
  try {
    // Ensure correct property name: `req.cookies`
    const token = req.cookies.jwt;
    
    // Check if token exists
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No token Provided" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    // Check if user exists
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error) {
    console.error("Error in protect middleware", error.message);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
