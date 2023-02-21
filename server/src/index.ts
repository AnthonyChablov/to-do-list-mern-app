import 'dotenv/config';
import env from "./utils/validateEnv";
import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';
import session from "express-session";


/* setup */
config();
const app = express();

// middleware functions
app.use(express.json());
app.use(cors());
//express Session middleware
app.use(session({
    secret: env.SESSION_SECRET // secret used to sin the cookie user recieves 
}))
app.use('/api/todo', todoRoutes);
app.use('/api/user', userRoutes);

/* routes */
app.get('/', (req: Request, res:Response)=>{
    res.send('Server Running');
});

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT);
});

