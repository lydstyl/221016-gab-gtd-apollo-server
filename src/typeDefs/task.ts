import { GraphQLScalarType, Kind } from "graphql"

const dateScalar = new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    serialize(value: Date) {
        return value.getTime() // Convert outgoing Date to integer for JSON
    },
    parseValue(value: number) {
        return new Date(value) // Convert incoming integer to Date
    },
    parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
            // Convert hard-coded AST string to integer and then to Date
            return new Date(parseInt(ast.value, 10))
        }
        // Invalid hard-coded value (not an integer)
        return null
    },
})

const Task = `
scalar Date 

type Task {
    id:ID
    user: String!
    name: String!
    link: String
    fixedDate: Date
    labels: [Label]
}
`
const taskQueries = `
    getTask(id: String!): Task
    getTasks: [Task]
`
const taskMutations = `
    addTask(name: String!, link: String, fixedDate: Date): Task
    updateTask(id: String!, name: String, link: String, fixedDate: Date, labels: [ID]): Task
    deleteTask(id: String!): Task

    addOneLabelToTask(labelId: String!, taskId: String!): Task
    removeOneLabelFromTask(labelId: String!, taskId: String!): Task
`

export { Task, taskQueries, taskMutations }
