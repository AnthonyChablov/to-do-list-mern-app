import {Request, Response} from 'express';

import bcrypt from 'bcryptjs'; // hashing the passwords with bcrypt
import jwt from 'jsonwebtoken'; // safe way to store the users for some period of time -- allows the user to stayed logged in for some period

import UserModel from '../../models/User';

export async function loginUser(req: Request, res:Response) {
    /* login form field has email and password */
    const {email, password}  = req.body;

    try{

        const existingUser = await UserModel.findOne({email});

        if(!existingUser){
            return res.status(404).json({message: 'User does not exist'});
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect){ 
            return res.status(400).json({message: 'Invalid Login'});
        }

        const token = jwt.sign({
            email: existingUser.email, 
            id: existingUser._id
        }, 'test', {expiresIn: '1h'});
        
        res.status(200).json({result: existingUser, token});
    }catch(error){
        res.status(500).json({message: 'Something went wrong'});
    }
}