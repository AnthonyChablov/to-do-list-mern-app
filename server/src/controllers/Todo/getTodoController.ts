import {Request, Response} from 'express';
import TodoModel from '../../models/Todo';
import { NextFunction } from 'express';

export async function getTodoController(req: Request, res:Response, next:NextFunction){
    
    try {

        // get singular todo 
        const todoId = req.params.todoId;
        const todo = await TodoModel.findById(todoId);

        if (!todo){
            return res.status(400).send('No task of this id exists');
        }

        res.json(todo);
    }catch(error){
        next(error);
    }
}