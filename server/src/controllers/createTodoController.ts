import {Request, Response} from 'express';
import TodoModel from '../models/Todo'; // mongodb model

export async function createTodoController(req: Request, res:Response){
    // create new todo
    const newTodo = new TodoModel({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        dueDate: req.body.dueDate,
        isDone: req.body.isDone,
    })

    // persist to db 
    const createdTodo = newTodo.save();

    // send created todo back to user
    res.json(createdTodo);
}