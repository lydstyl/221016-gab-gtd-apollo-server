import { Book, bookQueries, bookMutations } from "./book.js"
import { User, userQueries, userMutations } from "./user.js"
import { Login, loginQueries } from "./login.js"

const typeDefs = `
    ${User}
    ${Book}
    ${Login}
    type Query {
        ${bookQueries}
        ${userQueries}
        ${loginQueries}
    }
    type Mutation {
        ${bookMutations}
        ${userMutations}
    }
`

export default typeDefs
