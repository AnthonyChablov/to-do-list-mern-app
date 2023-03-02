import {Request, Response, NextFunction} from 'express';
import TodoModel from '../../models/Todo';
import { assertIsDefined } from '../../utils/assertIsDefined';

export async function getTodosController(req: Request, res:Response, next:NextFunction){
    
    try{
        const authenticatedUserId = req.session.userId;
        assertIsDefined(authenticatedUserId);
        const todos = await TodoModel.find({userId: authenticatedUserId}); 
    
        if (!todos){
            return res.status(400).send('No tasks exist');
        }
        res.json(todos);
    } catch(error){
        next(error)
    }
    
}