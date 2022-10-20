import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import { addTask, getTasks, updateTask, deleteTask } from "./task.js"

const resolvers = {
    Query: {
        getUsers,

        login,

        getTasks,
    },
    Mutation: {
        addUser,
        deleteUser,

        addTask,
        updateTask,
        deleteTask,
    },
}

export default resolvers
