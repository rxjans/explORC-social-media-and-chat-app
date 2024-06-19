import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connectDB.js';

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
});
