
import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TodoSchema = new Schema({
  userId: {type: ObjectId},
  title: String,
  description: String,
  startDate: Date,
  dueDate: Date,
});

const TodoModel = mongoose.model('ToDo', TodoSchema);

export default TodoModel;