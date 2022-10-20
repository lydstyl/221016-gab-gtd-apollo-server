import { getBooks, addBook, deleteBook } from "./book.js"
import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import { addTask, getTasks, updateTask, deleteTask } from "./task.js"

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
        updateTask,
        deleteTask,

        addBook,
        deleteBook,
    },
}

export default resolvers
