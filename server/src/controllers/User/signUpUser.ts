import {Request, Response} from 'express';
// storing passwords safely, we are hashing them.  Users want to have some security and safely store Passwords.
import bcrpyt from 'bcryptjs'; 
// Safe way for us to store the users in the browser for some period of time, if user leaves the site they can still stay loggedin.
import jwt from 'jsonwebtoken'; 

import UserModel from '../../models/User';


/* In all applications you need to have a sign in and sign up system */
// In most cases they are very similair to one another


export async function signUpUser(req: Request, res:Response) {
    // We need to get the email, password, firstname, lastname, id

    const {email, password, confirmPassword, firstname, lastname}  = req.body;

    try{
        // check if existing user
        const existingUser = await UserModel.findOne({email});

        // Since we wanna sign up, if existing user already exists --- we return error
        if(existingUser) { 
            return res.status(400).json({message: "User already exists."});
        }

        // If inputted password does not match confirm password --- we return error
        if (password !== confirmPassword){
            return res.status(400).json({message:'Passwords do not match, please try again.'});
        }

        // Once we confirm the existing user and password We are good to go.
        // Now we have to hash the password

        // two params: 
        //  1. the password itself, 
        //  2. the salt (level) --- the level of difficulty of the hash, people usually use 12
        const hashedPassword = await bcrpyt.hash(password, 12);

        // We not can create the user, by passing in all the data
        const result = await UserModel.create({ 
            email, 
            password: hashedPassword, 
            name: `${firstname}, ${lastname}` 
        });

        // Now we also need to create the JWT token 
        const token = jwt.sign({
                email: result.email,
                id:result._id,
            }, 'test', {
                expiresIn : "1h"
            }
        )  
        res.status(200).json({result, token});

    }catch(err){
        res.status(500).json({message: 'Server Error'})
    }

}

