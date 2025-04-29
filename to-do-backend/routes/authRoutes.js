import express from 'express';
import { signup, signin, signout, sendVerifyOtp, verifyEmail, isAthenticated, sendResetOtp, resetPassword } from '../controllers/authController.js';
import userAuth from '../middleware/userauth.js';

const authRouter = express.Router(); 

authRouter.post('/signup', signup);
authRouter.post('/signin', signin); 
authRouter.post('/signout', signout); 

authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp); 
authRouter.post('/verify-account', userAuth, verifyEmail); 
authRouter.get('/is-auth', userAuth, isAthenticated);

authRouter.post('/sent-reset-otp', sendResetOtp);
authRouter.post('/reset-password', resetPassword);

export default authRouter;