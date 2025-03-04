import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


//create all methods for message
export const sendMessage = async(req,res)=>{
    try {
       const {message} = req.body;
       const {id:receiverId} = req.params;//get receiver id from params
       const senderId = req.user._id;//get sender id from req.user

       let conversation = await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
       })

       if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId,receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        if(newMessage){
            conversation.message.push(newMessage._id);
        }
        // SOCKET.IO FUNCTIONALITY WILL GO THERE

        //save
        // await conversation.save();
        // await newMessage.save();

        await Promise.all([conversation.save(),newMessage.save()]); // this will run in parallel
        //send response
        res.status(200).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage Controller",error.message);
        res.status(500).json({
            message:"Internal Server Error",
        })
    }
};


export const getMessage = async(req,res)=>{
    try {
       const {id:userToChild} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all:[senderId,userToChild]}
        }).populate({path:'message'})
        
        if(!conversation){
            return res.status(200).json([]);
        }

        res.status(200).json(conversation.message);
       }catch (error) {
        console.log("Error in getMessage Controller",error.message);
        res.status(500).json({
            message:"Internal Server Error",
        })
    }
}