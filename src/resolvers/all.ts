import { getBooks, addBook, deleteBook } from "./book.js"
import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import { addTask, getTasks } from "./task.js"

const resolvers = {
    Query: {
        getUsers,

        login,

        getTasks,

        getBooks,
    },
    Mutation: {
        addUser,
        deleteUser,

        addTask,

        addBook,
        deleteBook,
    },
}

export default resolvers
