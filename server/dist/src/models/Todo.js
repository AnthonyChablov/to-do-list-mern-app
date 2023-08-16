"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ObjectId = mongoose_1.default.Types.ObjectId;
const TodoSchema = new Schema({
    userId: ObjectId,
    title: String,
    description: String,
    startDate: Date,
    dueDate: Date,
});
const TodoModel = mongoose_1.default.model('ToDo', TodoSchema);
exports.default = TodoModel;
