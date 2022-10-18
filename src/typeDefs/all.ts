import { Book, bookQueries, bookMutations } from "./book.js"
import { User, userQueries, userMutations } from "./user.js"

const typeDefs = `
    ${User}
    ${Book}
    type Query {
        ${bookQueries}
        ${userQueries}
    }
    type Mutation {
        ${bookMutations}
        ${userMutations}
    }
`

export default typeDefs
