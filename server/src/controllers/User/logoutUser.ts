import {NextFunction, Request, Response} from 'express';

export async function logoutUser(req: Request, res:Response, next:NextFunction) {
    req.session.destroy((error)=>{ // Attempts to destroy the session, and logout user
        if(error){
            next(error);
        }else{
            res.sendStatus(200);
        }
    });
};