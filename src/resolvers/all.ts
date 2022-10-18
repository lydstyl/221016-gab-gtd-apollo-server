import { getBooks, addBook, deleteBook } from "./book.js"
import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"

const resolvers = {
    Query: {
        getBooks,

        getUsers,

        login,
    },
    Mutation: {
        addBook,
        deleteBook,

        addUser,
        deleteUser,
    },
}

export default resolvers
