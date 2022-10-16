import * as dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose"

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
}

export { connectDB }
