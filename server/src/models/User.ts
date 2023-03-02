import  { InferSchemaType, model, Schema } from 'mongoose';

const UserSchema = new Schema({
    id: {type: String},
    firstName: {type: String, required : true},
    lastName : {type: String, required: true},
    // select: false makes sure that email/pw is not returned to Frontend
    // unique: true makes it so we can only store only one email in out db
    email: {type: String, required : true, unique:true, select: false}, 
    password: {type:String, required : true, select: false}, 
});

type User = InferSchemaType<typeof UserSchema>;
export default model<User>("User", UserSchema);