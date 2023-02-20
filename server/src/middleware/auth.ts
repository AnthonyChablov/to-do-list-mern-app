import type { RequestHandler } from "express";
import jwt from 'jsonwebtoken';

export const auth : RequestHandler = (req, res, next) => {
    try{
        // Here we are trying to see who the user is trying to be
        // need to check if the users token is valid 
        const token = req.headers.authorization?.split(' ')[1];
        
    } catch(err) {
        console.log(err);
    }
}