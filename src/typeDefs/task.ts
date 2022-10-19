// enum Label {
//     collect

//     quick

//     important
//     urgent // fixedDate

//     outside
//     phone

//     recursive
//     support

//     business
//     real estate
//     health
//     social
// }

// importance: Int

const Task = `
type Label {
    name: String!
    position: Int
}
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
    addTask(user: String!, name: String!, link: String, fixedDate: String): Task
    deleteTask(id: String): Task
`

export { Task, taskQueries, taskMutations }
