import colors from "colors"
import * as dotenv from "dotenv"
dotenv.config()
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connectDB } from "./config/db.js"
import Book from "./models/Book.js"

connectDB()

const typeDefs = `
    type Book {
        id:ID
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(title: String, author: String): Book
        deleteBook(id: String): Book
    }
`

const resolvers = {
    Query: {
        books: async () => {
            const result = await Book.find()
            return result
        },
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            // parent and args ?
            const newItem = new Book({
                title,
                author,
            })
            newItem.save()
            return newItem
        },
        deleteBook: async (_, { id }) => {
            const result = await Book.findByIdAndRemove(id)
            return result
        },
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
})
console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`)
