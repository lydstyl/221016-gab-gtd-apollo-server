import * as dotenv from 'dotenv'
dotenv.config()
import colors from 'colors'
import jwt from 'jsonwebtoken'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { connectDB } from './config/db.js'
import typeDefs from './typeDefs/all.js'
import resolvers from './resolvers/all.js'
import { MyContext } from './types.js'

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers
})

connectDB()

const { url } = await startStandaloneServer(server, {
  listen: { port: +process.env.PORT || 5000 },
  context: async ({ req, res }) => {
    // verify a token symmetric - synchronous
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
        return theContext
      } else {
        return theContext
      }
    } catch (err) {
      const unauthorisedContext: MyContext = {
        authScope: 'unauthorised',
        email: 'invalid token'
      }
      return unauthorisedContext
    }
    return {}
  }
})
// console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`)
console.log(`🚀  Server ready at: ${url}`)
