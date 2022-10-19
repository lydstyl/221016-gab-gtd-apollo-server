import { Book, bookQueries, bookMutations } from "./book.js"
import { User, userQueries, userMutations } from "./user.js"
import { Login, loginQueries } from "./login.js"
import { Task, taskQueries, taskMutations } from "./task.js"

const typeDefs = `
    ${User}
    ${Login}
    ${Task}
    ${Book}
    type Query {
        ${userQueries}
        ${loginQueries}
        ${taskQueries}
        ${bookQueries}
    }
    type Mutation {
        ${userMutations}
        ${taskMutations}
        ${bookMutations}
    }
`

export default typeDefs
