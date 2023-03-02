import {Request, Response, NextFunction} from 'express';
import TodoModel from '../../models/Todo';

export async function updateTodoController(req: Request, res:Response, next:NextFunction){
    try {
        const todoId = req.params.todoId;
        const todo = await TodoModel.findById(todoId) ;

        if (!todo){
            return res.status(400).send('No task of this id exists');
        }

        todo.title = req.body.title;
        todo.description = req.body.description;
        todo.startDate = req.body.startDate;
        todo.dueDate = req.body.dueDate;

        await todo.save();
        res.json(todo);
        
    } catch(error){
        next(error);
    }
}