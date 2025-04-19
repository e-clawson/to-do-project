import mongoose from "mongoose";

// const connectDB = async () => {

//     mongoose.connection.on('connected', () =>console.log("database connected"))

//     await mongoose.connect(`${process.env.MONGO_URL}/mern-auth`)
// }

async function connectDB() {
    try{ 
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDB connected")
    } catch(e) {
        console.log(e)
    }
}

export default connectDB;