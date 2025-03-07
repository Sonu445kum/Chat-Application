import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participants:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    message:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        }
    ]
},{timestamps:true});

// create model
const Conversation = mongoose.model("Conversation",conversationSchema);

// export
export default Conversation;