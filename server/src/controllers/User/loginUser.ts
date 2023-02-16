import {Request, Response} from 'express';
// storing passwords safely, we are hashing them.  Users want to have some security and safely store Passwords.
import bcrpyt from 'bcryptjs'; 
// Safe way for us to store the users in the browser for some period of time, if user leaves the site they can still stay loggedin.
import jwt from 'jsonwebtoken'; 

import UserModel from '../../models/User';

/* In all applications you need to have a sign in and sign up system */
// In most cases they are very similair to one another
// Once we do it once, we can now mostly duplicate the code to achieve the same purpose in any app.

export async function loginUser(req: Request, res:Response) {
    // 1. We need to get two things from front-end
    //      - The Email 
    //      - The Password 
    // How are we getting these things from the frontend?
    // Whenever we have a post request we get all the data from the req.body

    const {email, password}  = req.body; // all POST data we recieve is automatically available in the req.body

    // 
    try{
        const existingUser = await UserModel.findOne({email});

        if(!existingUser) {
            return res.status(404).json({message: "User does not exist."});
        }

        const isPasswordCorrect = await bcrpyt.compare(password, existingUser.password);
        
        if(!isPasswordCorrect){
            return res.status(400).json({message:'Invalid Credentials.'});
        }

        // If the user exists in the database AND password is correct
        // We can finally get the user's JSON WEB TOKEN that we need to send to the frontend
        const token = jwt.sign({ // inside the jwt, we need to provide all information we want to store in the token
            email: existingUser.email, 
            id:existingUser._id
        },'test', {
            expiresIn : "1h"
        }) 
        
        // ANother important arg for jwt.sign() is a 

        res.status(200).json({result: existingUser, token})


    } catch(err){
        res.status(500).json({message: 'Server Error'})
    }
}