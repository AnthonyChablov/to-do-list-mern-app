import {Request, Response, NextFunction} from 'express';
import UserModel from "../../models/User";
import bcrypt from "bcryptjs";
import createHttpError from 'http-errors';

export const registerUser = async(req: Request, res:Response, next:NextFunction) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const passwordRaw = req.body.password;  // for securtiy reasons never store passwords raw in db, we need to hash it 

    try {
        if (!firstName || !lastName || !email || !passwordRaw){
            throw createHttpError(400,'Parameters Missing' ); // bad request
        }
        // We dont want to rely on error msg from our database, we want to create our own check in the backend
        const existingUserEmail = await UserModel.findOne({email: email}).exec(); 
        
        if(existingUserEmail){
            throw createHttpError(400,'User already exists. Please use another email address or log in.' );
        }

        // Hashing password 
        const passwordHashed = await bcrypt.hash(passwordRaw, 10); //param1: password we want to hash, param2: hashing salt difficulty 

        // After signing up successfully, we create user and return user to FrontEnd
        const newUser = await UserModel.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:passwordHashed
        });

        // We now need to establish a session for recently registered user
        // We are using express sessions
        req.session.userId = newUser._id; // We need todo extra config as TS does not know of session obj of req

        res.status(201).json(newUser);

    }catch(error){
        next(error);
    }
}