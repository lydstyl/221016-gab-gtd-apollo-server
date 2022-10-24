const Task = `
type Task {
    id:ID
    user: String!
    name: String!
    link: String
    fixedDate: String
    labels: [Label]
}
`
const taskQueries = `
    getTasks: [Task]
`
const taskMutations = `
    addTask(name: String!, link: String, fixedDate: String): Task
    updateTask(id: String!, name: String, link: String, fixedDate: String,labels: [ID]): Task
    deleteTask(id: String!): Task

    addOneLabelToTask(labelId: String!, taskId: String!): Task
    removeOneLabelFromTask(labelId: String!, taskId: String!): Task
`

export { Task, taskQueries, taskMutations }
