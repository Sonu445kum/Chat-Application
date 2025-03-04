import User from "../models/user.model.js";


export const getUserForSidebar = async(req,res)=>{
    try {
       const loggedInUserId = req.user._id;//get logged in user id from req.user 

       const filteredUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password");//get all users except logged in user
       res.status(200).json(filteredUsers);
    } catch (error) {
       console.log("Error in getUserForSidebar Controller",error.message);
        res.this.state.json({error:"Internal Server Error"});
    }
}