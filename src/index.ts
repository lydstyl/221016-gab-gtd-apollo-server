import * as dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connectDB } from "./config/db.js"
import typeDefs from "./typeDefs/all.js"
import resolvers from "./resolvers/all.js"

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})
console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`)
