import {Request, Response, NextFunction} from 'express';
import UserModel from "../../models/User";
import createHttpError from 'http-errors';

export async function getAuthenticatedUser(req: Request, res:Response, next:NextFunction) {

    try{
        const user = await UserModel.findById(req.session.userId).select("+email").exec();
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}