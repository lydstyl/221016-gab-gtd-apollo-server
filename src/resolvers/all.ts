import { getBooks, addBook, deleteBook } from "./book.js"
import { getUsers, addUser, deleteUser } from "./user.js"

const resolvers = {
    Query: {
        getBooks,

        getUsers,
    },
    Mutation: {
        addBook,
        deleteBook,

        addUser,
        deleteUser,
    },
}

export default resolvers
