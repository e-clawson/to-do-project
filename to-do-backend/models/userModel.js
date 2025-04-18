import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    username: { type: String, required: true}, 
    password: { type: String, required: true},
})

const User = mongoose.model('users', userSchema)

export default User; 