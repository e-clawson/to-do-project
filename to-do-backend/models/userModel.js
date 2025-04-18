import mongoose from "mongoose";
import bcrypt from 'bcrypt';


const userSchema = mongoose.Schema({
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowerCase: true, 
        match: /\S+@\S+\.\S/,
        index: true, //query the users with the email
    },
    password: { 
        type: String, 
        required: true,
        minLength: 8
    },
    isAdmin: { 
        type: Boolean, 
        default: false
    }, 
    // isVerified: {
    //     type: Boolean, 
    //     default: false
    // }, 
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: "Todo"}]
}, {
    timestamps: true, //add timestamps for when things are changed 
});
//prehook for password encryption
userSchema.pre('save', async function(next) {
    if (this.isModified('password')) {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
} )

const User = mongoose.model('User', userSchema)

export default User; 