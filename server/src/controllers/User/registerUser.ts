import {Request, Response} from 'express';

import bcrypt from 'bcryptjs'; // hashing the passwords with bcrypt
import jwt from 'jsonwebtoken'; // safe way to store the users for some period of time -- allows the user to stayed logged in for some period

import UserModel from '../../models/User';

export async function registerUser(req: Request, res:Response) {
    const {email, password, firstName, lastName, confirmPassword}  = req.body;

    try{
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists.'});
        }

        // if password is not the same to the existing password
        if (password !== confirmPassword){
            return res.status(400).json({message: 'Passwords do not match.'});
        }

        // if there is no existing user and if the passwords match, we are good to create the new user
        const hashedPassword = await bcrypt.hash(password, 12) // we pass in password and the salt(level of difficulty of hashing)
        const result = await UserModel.create({ 
            email, password: hashedPassword, name: `${firstName} ${lastName}` 
        });
        const token = jwt.sign({email: result.email, id: result._id}, 'test', {expiresIn: '1h'});
        res.status(200).json({result, token});
    }catch(error){
        res.status(500).json({message: 'Something went wrong'});
    }
}