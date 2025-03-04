import express from 'express';
import dotenv from 'dotenv';
//import All Routes Here
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from './config/db.config.js';
dotenv.config();
const app = express();// to parse the incoming requests with JSON payloads(from req.body);


app.get('/', (req, res) => {
    res.send('Hello Iron Man!')
});


//middleware
app.use(express.json());
//routes
app.use("/api/auth",authRoutes);
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running at http://localhost:${PORT}`)
})