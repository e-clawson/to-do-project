//import express
import express from "express";
//import cors
import cors from 'cors';
//import dotenv - allows us to make  our own env variables 
import "dotenv/config"; 
//import the function to connect to the DB 
import connectDB from "./config.js";
//import todo model 
import Todo from "./models/todoModel.js";

//creat our express application 
const app = express()

//setup a cors middleware - can add some specific things into the () 
//but for now we leave empty 
app.use(cors())

//config middleware - data from client stored in request.body 
//and formatted as json - important middleware for post and put requests  
app.use(express.json())

//specify a port
const PORT = 8080

//make any route to test 
app.get('/test', (req, res) => {
    res.json("hello")
})

//route to get all the todos READ
app.get('/todos', async (req,res) => {
    try{
        const todos = await Todo.find({})
        console.log('GET /todos')
        res.status(200).json(todos)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//route to create a todo and add to the database CREATE
app.post('/todos', async (req,res) => {
    try{
        console.log(req.body)
        const newToDo = await Todo.create(req.body)
        console.log("POST /todos")
        res.status(201).json(newToDo)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//update 
app.put("/todos/:id", async (req,res) => {
    try {
        const editedToDo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        console.log(editedToDo)
        console.log("PUT /todos/:id")
        res.status(200).json(editedToDo)
    } catch(e) {
        console.log(e)
        res.status(400).json(e)
    }
})

//delete 

app.delete("/todos/:id", async (req,res) => {
    try {
        const deletedToDo = await Todo.findByIdAndDelete(req.params.id)
        console.log(deletedToDo)
        console.log("DELETE /todos/:id")
        res.status(200).json(deletedToDo)
    } catch {
        console.log(e)
        res.status(400).json(e)
    }
})

//add the port 
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
    connectDB()
})