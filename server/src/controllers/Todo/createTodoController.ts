import {NextFunction, Request, Response} from 'express';
import TodoModel from '../../models/Todo'; // mongodb model
import { assertIsDefined } from '../../utils/assertIsDefined';

export async function createTodoController(req: Request, res:Response, next:NextFunction){
    try{

        /* getting authenticated user and checking if exists */
        const authenticatedUserId = req.session.userId;
        assertIsDefined(authenticatedUserId);

        // create new todo
        const newTodo = new TodoModel({
            userId : authenticatedUserId,
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            dueDate: req.body.dueDate,
            isDone: req.body.isDone,
        });

        // persist to db 
        const createdTodo = await newTodo.save();
        // send created todo back to user
        res.json(createdTodo);

    } catch(error){
        next(error);
    }
    
}