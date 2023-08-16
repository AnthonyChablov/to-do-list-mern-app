"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const User_1 = __importDefault(require("../../models/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const http_errors_1 = __importDefault(require("http-errors"));
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const passwordRaw = req.body.password; // for securtiy reasons never store passwords raw in db, we need to hash it 
    try {
        if (!firstName || !lastName || !email || !passwordRaw) {
            throw (0, http_errors_1.default)(400, 'Parameters Missing'); // bad request
        }
        // We dont want to rely on error msg from our database, we want to create our own check in the backend
        const existingUserEmail = yield User_1.default.findOne({ email: email }).exec();
        if (existingUserEmail) {
            throw (0, http_errors_1.default)(400, 'User already exists. Please use another email address or log in.');
        }
        // Hashing password 
        const passwordHashed = yield bcryptjs_1.default.hash(passwordRaw, 10); //param1: password we want to hash, param2: hashing salt difficulty 
        // After signing up successfully, we create user and return user to FrontEnd
        const newUser = yield User_1.default.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: passwordHashed
        });
        // We now need to establish a session for recently registered user
        // We are using express sessions
        req.session.userId = newUser._id; // We need todo extra config as TS does not know of session obj of req
        res.status(201).json(newUser);
    }
    catch (error) {
        next(error);
    }
});
exports.registerUser = registerUser;
