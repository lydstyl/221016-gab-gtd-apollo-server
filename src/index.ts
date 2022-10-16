import colors from "colors"
import * as dotenv from "dotenv"
dotenv.config()
import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import books from "./data/books.js"
import { connectDB } from "./config/db.js"
import Book from './models/Book.js'

connectDB()

const typeDefs = `
    type Book {
        title: String
        author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(title: String, author: String): Book
    }
`

const resolvers = {
    // Query: {
    //     books: async () => {
            
    //         // console.log(Book.find());

    //         const result = await Book.find()
            
            
    //         return books},
    // },
    Query: {
        books:  async () => {
            const result = await Book.find()
            console.log(result);
            // return books
            return result
        },
    },
    Mutation: {
        addBook: (_, { title, author }) => { // parent and args ?
            // const newBook = {
            //     title,
            //     author,
            // }
            // // // in graphi :
            // // mutation AddBook {
            // //     addBook(title: "Gabise book", author: "Gab") {
            // //       title
            // //       author
            // //     }
            // //   }

            // books.push(newBook)

            const newBook = new Book({
                title: 'Mon titre', author: 'Gaby'
            })
            newBook.save()

            console.log(`Book ${newBook.title} added.`)

            return newBook
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

console.log(colors.green.underline.bold`🚀  Server ready at: ${url}`))
