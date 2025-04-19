import express from "express";
import userAuth from "../middleware/userauth.js";
import { getUserData } from "../controllers/userController.js";

const userRouter = express.Router(); 

//GET the user Data will use userAuth middleware and getUserData controller 
userRouter.get('/data', userAuth, getUserData)


export default userRouter; 