import mongoose from "mongoose";


export const connectDB = async (req,res)=>{
    try {
       await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to DB");
        
    } catch (error) {
        console.log("Error in connecting to DB",error.message);
        process.exit(1);
    }
}