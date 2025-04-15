//import express
import express from "express";

import cors from 'cors';
//allows us to make  our own env variables 

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