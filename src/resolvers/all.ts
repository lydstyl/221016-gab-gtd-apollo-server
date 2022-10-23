import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import { addTask, getTasks, updateTask, deleteTask } from "./task.js"
import { addLabel, getLabels, deleteLabel } from "./label.js"

const resolvers = {
    Query: {
        getUsers,

        login,

        getTasks,
        getLabels,
    },
    Mutation: {
        addUser,
        deleteUser,

        addTask,
        updateTask,
        deleteTask,

        addLabel,
        deleteLabel,
    },
}

export default resolvers
