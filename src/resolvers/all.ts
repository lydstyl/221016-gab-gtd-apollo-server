import { getUsers, addUser, deleteUser } from "./user.js"
import { login } from "./login.js"
import {
    addTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    addOneLabelToTask,
    removeOneLabelFromTask,
} from "./task.js"
import { addLabel, getLabels, deleteLabel, updateLabel } from "./label.js"

const resolvers = {
    Query: {
        getUsers,

        login,

        getTask,
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
        removeOneLabelFromTask,

        addLabel,
        deleteLabel,
        updateLabel,
    },
}

export default resolvers
