import express from 'express';
import { getAuthenticatedUser } from '../controllers/User/getAuthenticatedUser';
import { loginUser } from '../controllers/User/loginUser';
import { registerUser } from '../controllers/User/registerUser';

const router = express.Router();

router.get('/', getAuthenticatedUser);
router.post('/login', loginUser);  
router.post('/register', registerUser);  

export default router;