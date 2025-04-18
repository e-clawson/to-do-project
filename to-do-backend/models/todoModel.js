import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    text: { type: String},
    completed: { type: Boolean, default: false}, 
    users: {type: mongoose.Schema.Types.ObjectId, ref: "User"}
})

const Todo = mongoose.model('todos', todoSchema)

export default Todo;