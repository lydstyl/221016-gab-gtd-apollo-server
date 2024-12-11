import * as dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './typeDefs/all.js'
import resolvers from './resolvers/all.js'
import { MyContext } from './types.js'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/db.js'

const app = express()

app.use(
  cors({
    origin: 'https://my-custom-gtd.netlify.app', // Remplace par l'origine autorisée (this line is useless ?)
    credentials: true, // Si tu veux gérer les cookies et les sessions
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Origin', 'Authorization', 'Content-Type', 'Accept']
  })
)

async function startServer() {
  await connectDB()

  const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers
  })

  const { url } = await startStandaloneServer(server, {
    listen: { port: +process.env.PORT || 5000 }, // render use 500
    context: async ({ req, res }) => {
      // Verify a token
      try {
        const decoded = jwt.verify(
          req.headers.authorization,
          process.env.JWT_SECRET
        )
        const { email } = decoded
        const theContext: MyContext = {
          authScope: 'user',
          email
        }
        if (email === process.env.ADMIN_EMAIL) {
          theContext.authScope = 'admin'
        }
        return theContext
      } catch (err) {
        const unauthorisedContext: MyContext = {
          authScope: 'unauthorised',
          email: 'invalid token'
        }
        return unauthorisedContext
      }
    }
  })

  // console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`)
  console.log(`🚀  Server ready at: ${url}`)
}

startServer()
