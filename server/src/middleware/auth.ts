import { Request, Response, NextFunction } from 'express';
import createHttpError from 'http-errors';

export async function auth(req: Request, res:Response, next:NextFunction){
    if(req.session.userId){ // if user logged in 
        next();
    } else {
        next(createHttpError(401, 'User not authenticated.'))
    }

}