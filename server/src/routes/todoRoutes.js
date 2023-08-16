"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createTodoController_1 = require("../controllers/Todo/createTodoController");
const deleteTodoController_1 = require("../controllers/Todo/deleteTodoController");
const getTodoController_1 = require("../controllers/Todo/getTodoController");
const getTodosController_1 = require("../controllers/Todo/getTodosController");
const updateTodoController_1 = require("../controllers/Todo/updateTodoController");
const router = express_1.default.Router();
router.get('/', getTodosController_1.getTodosController);
router.get('/:todoId', getTodoController_1.getTodoController);
router.post('/', createTodoController_1.createTodoController);
router.put('/:todoId', updateTodoController_1.updateTodoController);
router.delete('/:todoId', deleteTodoController_1.deleteTodoController);
exports.default = router;
