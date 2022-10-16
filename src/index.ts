import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import books from "./data/books.js"

const typeDefs = `
    type Book {
        title: String
        #author: String
    }

    type Query {
        books: [Book]
    }

    type Mutation {
        addBook(title: String): Book
    }
`

const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: () => {
            console.log("book added")

            return {
                title: "New book",
                author: "Gabriel Brun",
            }
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

console.log(`🚀  Server ready at: ${url}`)
