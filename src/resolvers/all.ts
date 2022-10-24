import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import {
    addTask,
    getTasks,
    updateTask,
    deleteTask,
    addOneLabelToTask,
} from "./task.js"
import { addLabel, getLabels, deleteLabel, updateLabel } from "./label.js"

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
        addOneLabelToTask,

        addLabel,
        deleteLabel,
        updateLabel,
    },
}

export default resolvers
