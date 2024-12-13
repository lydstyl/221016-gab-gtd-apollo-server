const { MongoClient } = require('mongodb')
require('dotenv').config()

const uri = process.env.MONGO_URI
console.log('🚀 ~ uri:', uri)
const client = new MongoClient(uri)

async function run() {
  try {
    await client.connect()
    console.log('Connected to MongoDB!')
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

run()
