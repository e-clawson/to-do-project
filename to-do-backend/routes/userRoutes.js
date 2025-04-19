import express from "express";
import { getUserData } from "../controllers/userController.js";
import userAuth from "../middleware/userauth.js";

const userRouter = express.Router(); 

//GET the user Data will use userAuth middleware and getUserData controller 
userRouter.get('/data', userAuth, getUserData)


export default userRouter; 