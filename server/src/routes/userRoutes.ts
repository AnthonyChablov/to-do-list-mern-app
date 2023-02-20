import express from 'express';
import { loginUser } from '../controllers/User/loginUser';
import { registerUser } from '../controllers/User/registerUser';

const router = express.Router();

router.post('/login', loginUser);  
router.post('/register', registerUser);  

export default router;