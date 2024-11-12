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

 

app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`)
});
// Routes 
app.use('/api/user', userRoutes);  

app.use((err, req, res, next)=> {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
})