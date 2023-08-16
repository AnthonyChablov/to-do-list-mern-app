"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTodoController = void 0;
const Todo_1 = __importDefault(require("../../models/Todo")); // mongodb model
const assertIsDefined_1 = require("../../utils/assertIsDefined");
function createTodoController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            /* getting authenticated user and checking if exists */
            const authenticatedUserId = req.session.userId;
            (0, assertIsDefined_1.assertIsDefined)(authenticatedUserId);
            // create new todo
            const newTodo = new Todo_1.default({
                userId: authenticatedUserId,
                title: req.body.title,
                description: req.body.description,
                startDate: req.body.startDate,
                dueDate: req.body.dueDate,
                isDone: req.body.isDone,
            });
            // persist to db 
            const createdTodo = yield newTodo.save();
            // send created todo back to user
            res.json(createdTodo);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.createTodoController = createTodoController;
