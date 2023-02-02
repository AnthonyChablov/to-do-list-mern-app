import {Request, Response} from 'express';
import TodoModel from '../models/Todo';

export async function getTodoController(req: Request, res:Response){
    // get singlurat todo 
    const todoId = req.params.todoId;

    const todo = await TodoModel.findById(todoId);

    res.json(todo);

}