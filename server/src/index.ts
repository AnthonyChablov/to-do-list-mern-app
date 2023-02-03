import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import cors from 'cors';
import { getTodosController } from './controllers/getTodosController';
import { getTodoController } from './controllers/getTodoController';
import { createTodoController } from './controllers/createTodoController';
import { deleteTodoController } from './controllers/deleteTodoController';

/* setup */
config();
const app = express();
const PORT = 8000;

// middleware functions
app.use(express.json());
app.use(cors({
    origin:'*',
}));

/* routes */
app.get('/', (req: Request, res:Response)=>{
    res.send('Hello World');
});

/* Create a todo */
app.post('/api/todo', createTodoController);

/* Read - Get all todos */
app.get('/api/todo' , getTodoController);

/* Read - Get one todo */
app.get('/api/todo/:todoId', getTodoController);

/* Update a todo */
app.put('/api/todo/:todoId', ()=>{
    //TODO
});

/* Delete a todo */
app.delete('/api/todo/:todoId',deleteTodoController);

mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${PORT}`);
    app.listen(PORT);
});
