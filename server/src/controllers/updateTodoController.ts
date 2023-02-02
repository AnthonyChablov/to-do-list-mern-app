import {Request, Response} from 'express';
import TodoModel from '../models/Todo'; // mongodb model

export async function updateTodoController(req: Request, res:Response){
    const todoId = req.params.todoId;

    //TODO need to implement update controller 
    
    

}