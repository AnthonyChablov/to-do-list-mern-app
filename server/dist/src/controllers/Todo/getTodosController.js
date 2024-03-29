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
exports.getTodosController = void 0;
const Todo_1 = __importDefault(require("../../models/Todo"));
const assertIsDefined_1 = require("../../utils/assertIsDefined");
function getTodosController(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const authenticatedUserId = req.session.userId;
            (0, assertIsDefined_1.assertIsDefined)(authenticatedUserId);
            const todos = yield Todo_1.default.find({ userId: authenticatedUserId });
            if (!todos) {
                return res.status(400).send('No tasks exist');
            }
            res.json(todos);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.getTodosController = getTodosController;
