import {NextFunction, Request, Response} from 'express';
import bcrypt from 'bcryptjs'; // hashing the passwords with bcrypt
import UserModel from '../../models/User';
import createHttpError from 'http-errors';

export async function loginUser(req: Request, res:Response, next:NextFunction) {
    const email = req.body.email;
    const password = req.body.password;  

    try{
        if(!email || !password){
            throw createHttpError(400,'Parameters Missing' );
        }

        const user = await UserModel.findOne({email: email}).select('+password +email').exec();

        if(!user){
            throw createHttpError( 401, 'Invalid Credentials' );
        }

        const passwordMatch = await bcrypt.compare(password, user.password); // comparing raw password with hashed password from our database

        if(!passwordMatch){
            throw createHttpError( 401, 'Invalid Credentials' );
        }

        // If the user exists and the passowrd matches
        req.session.userId = user?._id;
        res.status(201).json(user);
        
    }catch(error){
        next(error);
    }
}