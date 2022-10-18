import { getBooks, addBook, deleteBook } from "./book.js"

const resolvers = {
    Query: {
        getBooks,
    },
    Mutation: {
        addBook,
        deleteBook,
    },
}

export default resolvers
