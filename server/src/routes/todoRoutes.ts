import express from 'express';
import { createTodoController } from '../controllers/Todo/createTodoController';
import { deleteTodoController } from '../controllers/Todo/deleteTodoController';
import { getTodoController } from '../controllers/Todo/getTodoController';
import { getTodosController } from '../controllers/Todo/getTodosController';
import { updateTodoController } from '../controllers/Todo/updateTodoController';

const router = express.Router();

router.post('/', createTodoController);
router.get('/', getTodosController);
router.get('/:todoId', getTodoController);
router.put('/:todoId', updateTodoController);
router.delete('/:todoId', deleteTodoController);



export default router;