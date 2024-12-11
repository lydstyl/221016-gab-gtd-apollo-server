import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
dotenv.config()

const uri = process.env.MONGO_URI
// console.log('🚀 ~ uri:', uri)

async function connectDB() {
  try {
    await mongoose.connect(uri)
    console.log('Connected to MongoDB')
  } catch (err) {
    console.error('Error connecting to MongoDB:', err)
  } finally {
    mongoose.disconnect()
  }
}

connectDB()
