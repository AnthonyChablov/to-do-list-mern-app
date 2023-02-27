import 'dotenv/config';
import express, {NextFunction, Request, Response} from 'express';
import mongoose from 'mongoose';
import {config} from 'dotenv';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes';
import userRoutes from './routes/userRoutes';
import session from "express-session";
import env from "./utils/validateEnv";
import MongoStore from 'connect-mongo';
import createHttpError, {isHttpError} from 'http-errors';

/* setup */
config();
const app = express();

// middleware
app.use(express.json());
var corsOptions = { /* CORS configuration */
    origin: 'http://127.0.0.1:5173',
    credentials : true
}
app.use(cors(corsOptions));

// express session middleware
app.use(session({
    secret: env.SESSION_SECRET, // secret used to sin the cookie user recieves 
    resave: false,
    saveUninitialized: false,
    // configure cookie that will be stored onto users browser
    cookie:{
        maxAge: 60 * 60 * 1000, // how long cookie lives (in this case 1hr) 
        sameSite: false,        //  Soon, cookies *without* the “SameSite” attribute or with an invalid value will be treated as “Lax”. 
                                //This means that the cookie will no longer be sent in third-party contexts.
    },
    rolling: true,  // as long as user is using our website, this cookie will be refreshed automatically,
                    // if user revists our website within the hour, they will remain signed in.
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL
    }),  // where session storage is stored, for development it is good to store session data somewhere, in this case mongoDB (MongoStore)
}));

/* routes */
app.get('/', (req: Request, res:Response)=>{
    res.send('Server Running');
});

app.use('/api/todo', todoRoutes);
app.use('/api/user', userRoutes);
app.use((req: Request, res:Response, next: NextFunction)=>{
    next(createHttpError(404, "Endpoint not found"));
});

app.use((error: unknown, req: Request, res:Response, next: NextFunction)=>{
    console.error(error);
    let errorMessage = 'An uknown error occurred'
    let statusCode = 500;
    if(isHttpError(error)){
        statusCode = error.status;
        errorMessage= error.message;
    }
    res.status(statusCode).json({error: errorMessage});
});

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGO_URL ?? ''
).then(()=>{
    console.log(`Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT);
});

