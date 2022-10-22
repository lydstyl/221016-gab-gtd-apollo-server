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
    addTask(name: String!, link: String, fixedDate: String,labels: [Label]): Task
    updateTask(id: String!, name: String, link: String, fixedDate: String,labels: [Label]): Task
    deleteTask(id: String!): Task
`

export { Task, taskQueries, taskMutations }
