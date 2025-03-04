import mongoose from "mongoose";
// create Schema
const messageSchema = new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required:true
    },

},{timestamps:true});
// create model
const Message = mongoose.model("Message",messageSchema);

// export
export default Message;