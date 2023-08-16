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
exports.loginUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs")); // hashing the passwords with bcrypt
const User_1 = __importDefault(require("../../models/User"));
const http_errors_1 = __importDefault(require("http-errors"));
function loginUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const email = req.body.email;
        const password = req.body.password;
        try {
            if (!email || !password) {
                throw (0, http_errors_1.default)(400, 'Parameters Missing');
            }
            const user = yield User_1.default.findOne({ email: email }).select('+password +email').exec();
            if (!user) {
                throw (0, http_errors_1.default)(401, 'Invalid Credentials');
            }
            const passwordMatch = yield bcryptjs_1.default.compare(password, user.password); // comparing raw password with hashed password from our database
            if (!passwordMatch) {
                throw (0, http_errors_1.default)(401, 'Invalid Credentials');
            }
            // If the user exists and the passowrd matches
            req.session.userId = user === null || user === void 0 ? void 0 : user._id;
            res.status(201).json(user);
        }
        catch (error) {
            next(error);
        }
    });
}
exports.loginUser = loginUser;
