import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import books from "./data/books.js"

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
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (_, { title, author }) => {
            const newBook = {
                title,
                author,
            }
            // // in graphi :
            // mutation AddBook {
            //     addBook(title: "Gabise book", author: "Gab") {
            //       title
            //       author
            //     }
            //   }

            books.push(newBook)

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

console.log(`🚀  Server ready at: ${url}`)
