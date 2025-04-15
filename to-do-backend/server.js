//import express
import express from "express";

import cors from 'cors';
//allows us to make  our own env variables 

//setup a cors middleware - can add some specific things into the () 
//but for now we leave empty 
app.use(cors())

//creat our express application 
const app = express()

//specify a port
const PORT = 8080

//make any route to test 
app.get('/test', (req, res) => {
    res.json("hello")
})

//add the port 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    //connectDB()
})