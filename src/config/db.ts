import * as dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import mongoose from "mongoose"

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(
        colors.green.underline(`MongoDB Connected: ${conn.connection.host}`)
    )
}

export { connectDB }
