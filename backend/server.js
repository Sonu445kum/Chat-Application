import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
//import All Routes Here
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";


import { connectDB } from './config/db.config.js';
dotenv.config();
const app = express();// to parse the incoming requests with JSON payloads(from req.body);



app.get('/', (req, res) => {
    res.send('Hello Iron Man!')
});


//middleware
app.use(cors({
    origin:'http://localhost:5173',
}));
app.use(express.json());
app.use(cookieParser());
//routes
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/user",userRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})