import {Request, Response} from 'express';
import TodoModel from '../models/Todo'; // mongodb model

export async function deleteTodoController(req: Request, res:Response){
    // get the todo id
    const todoId = req.params.todoId;

    // go into db and find that id then delete
    const todo = await TodoModel.findByIdAndDelete(todoId);

    // return deleted todo to user
    res.json(todo);

}