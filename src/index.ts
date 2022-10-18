import * as dotenv from "dotenv"
dotenv.config()
import colors from "colors"
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connectDB } from "./config/db.js"
import typeDefs from "./typeDefs/all.js"
import resolvers from "./resolvers/all.js"

interface MyContext {
    authScope?: String
}
const server = new ApolloServer<MyContext>({
    typeDefs,
    resolvers,
})

connectDB()

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => ({
        // authScope: getScope(req.headers.authorization),
        authScope: req.headers.authorization, // TODO function getScope if token ok user if token and email lyd admin
    }),
})
console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`)
