import express from 'express';
import { signup, signin, signout, sendVerifyOtp, verifyEmail } from '../controllers/authController.js';
import userAuth from '../middleware/userauth.js';


const authRouter = express.Router(); 

authRouter.post('/signup', signup);
authRouter.post('/signin', signin); 
authRouter.post('/signout', signout); 

authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp); 
authRouter.post('/verify-account', userAuth, verifyEmail); 

export default authRouter;