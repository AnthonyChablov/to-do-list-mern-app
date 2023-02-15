import express from 'express';
import { createTodoController  } from '../controllers/createTodoController';
import { deleteTodoController } from '../controllers/deleteTodoController';
import { getTodoController } from '../controllers/getTodoController';
import { getTodosController } from '../controllers/getTodosController';
import { updateTodoController } from '../controllers/updateTodoController';

const router = express.Router();

router.post('/', createTodoController);
router.get('/', getTodosController);
router.get('/:todoId', getTodoController);
router.put('/:todoId', updateTodoController);
router.delete('/:todoId', deleteTodoController);



export default router;