"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const getAuthenticatedUser_1 = require("../controllers/User/getAuthenticatedUser");
const loginUser_1 = require("../controllers/User/loginUser");
const registerUser_1 = require("../controllers/User/registerUser");
const logoutUser_1 = require("../controllers/User/logoutUser");
const auth_1 = require("../middleware/auth");
const router = express_1.default.Router();
router.get('/', auth_1.auth, getAuthenticatedUser_1.getAuthenticatedUser); // seeing if user is authenticated via cookie
router.post('/login', loginUser_1.loginUser);
router.post('/register', registerUser_1.registerUser);
router.post('/logout', logoutUser_1.logoutUser);
exports.default = router;
