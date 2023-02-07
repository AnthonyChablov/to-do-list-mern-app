import {Request, Response} from 'express';
import TodoModel from '../models/Todo'; // mongodb model

export async function getTodosController(req: Request, res:Response){
    const todos = await TodoModel.find(); 
    
    if (!todos){
        return res.status(400).send('No tasks exist');
    }

    res.json(todos);
}