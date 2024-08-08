import express from 'express';
import dotenv from 'dotenv';
import connectDB from './database/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from '../api/routes/userRoutes.js';

dotenv.config();
connectDB();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cookieParser());

// Routes 
app.use('/api/user', userRoutes);   

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
});
