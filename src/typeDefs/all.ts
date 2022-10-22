import { User, userQueries, userMutations } from "./user.js"
import { Login, loginQueries } from "./login.js"
import { Task, taskQueries, taskMutations } from "./task.js"
import { Label, labelQueries, labelMutations } from "./label.js"

const typeDefs = `
    ${User}
    ${Login}
    ${Task}
    ${Label}
    type Query {
        ${userQueries}
        ${loginQueries}
        ${taskQueries}
        ${labelQueries}
    }
    type Mutation {
        ${userMutations}
        ${taskMutations}
        ${labelMutations}
    }
`

export default typeDefs
