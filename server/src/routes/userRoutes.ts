import express from 'express';
import { getAuthenticatedUser } from '../controllers/User/getAuthenticatedUser';
import { loginUser } from '../controllers/User/loginUser';
import { registerUser } from '../controllers/User/registerUser';
import { logoutUser } from '../controllers/User/logoutUser';

const router = express.Router();

router.get('/', getAuthenticatedUser); // seeing if user is authenticated via cookie
router.post('/login', loginUser);  
router.post('/register', registerUser);  
router.post('/logout', logoutUser);

export default router;