import {Request, Response, NextFunction} from 'express';
import User from "../../models/User";
import bcrypt from "bcryptjs";

export const registerUser = async(req: Request, res:Response, next:NextFunction) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.password;
    const passwordRaw = req.body.password;  // for securtiy reasons never store passwords raw in db, we need to hash it 

    try {
        if (!firstName || !lastName || !email || !passwordRaw){
            res.status(400).send("Parameters missing."); // bad request
        }
        // We dont want to rely on error msg from our database, we want to create our own check in the backend
        const existingUserEmail = await User.findOne({email: email}).exec(); // if this is true we know user already exists
        
        if(existingUserEmail){
            res.status(400).send("User already exists. Please use another email address or log in.");
        }

        // Hashing password 
        const passwordHashed = await bcrypt.hash(passwordRaw, 10); //param1: password we want to hash, param2: hashing salt difficulty 

        // After signing up successfully, we create user and return user to FrontEnd
        const newUser = await User.create({
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