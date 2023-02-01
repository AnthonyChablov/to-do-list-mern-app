import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';

config();
const app = express();
const PORT = 8000;



app.get('/', (req: Request, res:Response)=>{
    res.send('Hello World');
});






mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${PORT}`);
    app.listen(PORT);
});
