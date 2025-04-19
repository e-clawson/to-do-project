import express from "express";
import { getUserData } from "../controllers/userController";

const userRouter = express.Router(); 

//GET the user Data will use userAuth middleware and getUserData controller 
userRouter.get('/data', userAuth, getUserData)


export default userRouter; 