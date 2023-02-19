import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {type:String, required : true},
    lastName : {type:String, required: true},
    email: {type:String, required : true},
    password: {type:String, required : true},
    id:{type:String}
});

const UserModel = mongoose.model('ToDo', UserSchema);

export default UserModel;