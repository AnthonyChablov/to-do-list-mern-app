import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TodoSchema = new Schema({
  title: String,
  description: String,
  dueDate: Date,
  isDone:Boolean,
});

const TodoModel = mongoose.model('Deck', TodoSchema);

export default TodoModel;