import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TodoSchema = new Schema({
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
  isDone:Boolean,
});

const TodoModel = mongoose.model('ToDo', TodoSchema);

export default TodoModel;