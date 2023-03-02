import {Request, Response} from 'express';
import TodoModel from '../../models/Todo';
import { NextFunction } from 'express';

export async function deleteTodoController(req: Request, res:Response, next:NextFunction){

    try{
        // get the todo id
        const todoId = req.params.todoId;

        // go into db and find that id then delete
        const todo = await TodoModel.findByIdAndDelete(todoId);

        // return deleted todo to user
        res.json(todo);
    } catch(error){
        next(error);
    }
}