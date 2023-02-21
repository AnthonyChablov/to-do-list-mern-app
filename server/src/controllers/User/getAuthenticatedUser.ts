import {Request, Response, NextFunction} from 'express';
import UserModel from "../../models/User";
import createHttpError from 'http-errors';

export async function getAuthenticatedUser(req: Request, res:Response, next:NextFunction) {
    const authenticatedUserId = req.session.userId;

    try{
        if (!authenticatedUserId){
            throw createHttpError(401,'User not authenticated');
        }
        const user = await UserModel.findById(authenticatedUserId).select("+email").exec();
        res.status(200).json(user);
    }catch(error){
        next(error);
    }
}