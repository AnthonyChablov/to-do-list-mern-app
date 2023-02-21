import express from 'express';
import { createTodoController } from '../controllers/Todo/createTodoController';
import { deleteTodoController } from '../controllers/Todo/deleteTodoController';
import { getTodoController } from '../controllers/Todo/getTodoController';
import { getTodosController } from '../controllers/Todo/getTodosController';
import { updateTodoController } from '../controllers/Todo/updateTodoController';
import { auth } from '../middleware/auth'; // we want to add authenticatino before certain actions to approve them for certain users

const router = express.Router();

router.get('/', getTodosController);
router.get('/:todoId', getTodoController);

router.post('/', createTodoController);
router.put('/:todoId', updateTodoController);
router.delete('/:todoId', deleteTodoController);

export default router;