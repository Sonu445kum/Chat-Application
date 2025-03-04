import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();


app.get('/', (req, res) => {
    res.send('Hello Iron Man!')
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})