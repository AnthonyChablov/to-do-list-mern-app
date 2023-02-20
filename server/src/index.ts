import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';

/* setup */
config();
const app = express();
const PORT = 8000;

// middleware functions
app.use(express.json());
app.use(cors());
app.use('/api/todo', todoRoutes);
app.use('/user', userRoutes);

/* routes */
app.get('/', (req: Request, res:Response)=>{
    res.send('Server Running');
});

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${PORT}`);
    app.listen(PORT);
});

