import express from 'express';
import { loginUser } from '../controllers/User/loginUser';
import { signUpUser } from '../controllers/User/signUpUser';

const router = express.Router();


// So why is login a post route? 
// We have to send all the info from the login form to the backend
// Then the backend does something based on that information -- In this case its gonna sign in the user
router.post('/login', loginUser);  
// the same goes for signing up 
router.post('/login', signUpUser);  


export default router;