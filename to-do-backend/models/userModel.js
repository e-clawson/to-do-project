import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true, 
        // lowerCase: true, 
        // match: /\S+@\S+\.\S/,
        // index: true, //query the users with the email
    },
    password: { 
        type: String, 
        required: true,
        minLength: 8
    },
    verifyOtp: {
        type: String, 
        default: ''
    },
    verifyOtpExpireAt: {
        type: Number, 
        default: 0
    },
    isAccountVerified: {
        type: Boolean, 
        default: false
    },
    resetOtp: {
        type: String, 
        default: ''
    },
    resetOtpExpireAt: {
        type: Number, 
        default: 0
    },
    todos: [{type: mongoose.Schema.Types.ObjectId, ref: "Todo"}]
}, {
    timestamps: true, //add timestamps for when things are changed 
});

// //prehook for password encryption
// userSchema.pre('save', async function(next) {
//     if (this.isModified('password')) {
//         const hashedPassword = await bcrypt.hash(this.password, 10);
//         this.password = hashedPassword;
//     }
//     next();
// } )

const User = mongoose.model('User', userSchema)

export default User; 