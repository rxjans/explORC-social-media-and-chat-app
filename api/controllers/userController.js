import User from '../models/userModel.js';
import { errorHandler } from '../util/errorHandler.js';
import bcryptjs from 'bcryptjs';

export const signupUser = async(req, res, next)=>{
    try {
        const {name, email, username, password } = req.body;
        const user = await User.findOne({$or: [{email, username}]});

        if(user){
            return next(errorHandler(409, 'User with same username/email already exists'));
        }
        
        const hashedPassword = await bcryptjs.hashSync(password, 10);

        const newUser = new User({
            name, 
            email,
            username,
            password: hashedPassword
        });

        await newUser.save();
        if(newUser){
            res.status(200).json({
                _id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
                message: "Signed up successfully"
            });
        }
        else next(error);

    } catch (error) {
        next(error);
    }
}