//import express
import express from "express";
//import cors
import cors from 'cors';
//import dotenv - allows us to make  our own env variables 
import "dotenv/config"; 
//import the function to connect to the DB 
import connectDB from "./config/config.js";
//import cookie parser
import cookieParser from "cookie-parser";

//import routes
import authRouter from './routes/authRoutes.js';
import userRouter from "./routes/userRoutes.js";

//create variable for frontend link for cookies 
const allowedOrigins = ['http://localhost:5173','http://localhost:5173']

//creat our express application 
const app = express()

//setup a cors middleware - can add some specific things into the () 
//but for now we leave empty 
app.use(cors({origin: allowedOrigins, credentials: true}))

//config middleware - data from client stored in request.body 
//and formatted as json - important middleware for post and put requests  
app.use(express.json())
//cookie parser
app.use(cookieParser())

//specify a port
const PORT = 8080

//API Endpoints

//route to test connection
app.get('/test', (req, res) => {
    res.json("hello")
})

//routes 
app.use('/auth', authRouter);
app.use('/user', userRouter);

//add the port 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})