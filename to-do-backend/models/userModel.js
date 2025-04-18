import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";

const userSchema = mongoose.Schema({
    username: { type: String, required: true}, 
    password: { type: String, required: true},
})

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
const User = mongoose.model('User', userSchema)

export default User; 