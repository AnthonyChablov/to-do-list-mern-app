"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const todoRoutes_1 = __importDefault(require("./routes/todoRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const express_session_1 = __importDefault(require("express-session"));
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const http_errors_1 = __importStar(require("http-errors"));
const auth_1 = require("./middleware/auth");
const config_1 = require("../config");
/* setup */
(0, dotenv_1.config)();
const app = (0, express_1.default)();
// middleware
app.use(express_1.default.json());
var corsOptions = {
    origin: config_1.corsOptionsOrigin,
    credentials: true
};
app.use((0, cors_1.default)(corsOptions));
// express session middleware
app.use((0, express_session_1.default)({
    secret: validateEnv_1.default.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    // configure cookie that will be stored onto users browser
    cookie: {
        maxAge: 60 * 60 * 1000,
        sameSite: false, //  Soon, cookies *without* the “SameSite” attribute or with an invalid value will be treated as “Lax”. 
        //This means that the cookie will no longer be sent in third-party contexts.
    },
    rolling: true,
    // if user revists our website within the hour, they will remain signed in.
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGO_URL
    }), // where session storage is stored, for development it is good to store session data somewhere, in this case mongoDB (MongoStore)
}));
/* routes */
app.get('/', (req, res) => {
    res.send('Server Running');
});
app.use('/api/todo', auth_1.auth, todoRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
app.use((req, res, next) => {
    next((0, http_errors_1.default)(404, "Endpoint not found"));
});
app.use((error, req, res, next) => {
    console.error(error);
    let errorMessage = 'An uknown error occurred';
    let statusCode = 500;
    if ((0, http_errors_1.isHttpError)(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect((_a = process.env.MONGO_URL) !== null && _a !== void 0 ? _a : '').then(() => {
    console.log(`Listening on Port ${process.env.PORT}`);
    app.listen(process.env.PORT || 3000);
});
