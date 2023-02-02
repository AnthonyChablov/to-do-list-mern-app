import {Request, Response} from 'express';
import TodoModel from '../models/Todo'; // mongodb model

export async function getTodosController(req: Request, res:Response){
    const todo = await TodoModel.find(); 
    res.json(todo);
}