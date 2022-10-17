import { Book, bookQueries, bookMutations } from "./book.js"

const typeDefs = `
    ${Book}
    type Query {
        ${bookQueries}
    }
    type Mutation {
        ${bookMutations}
    }
`

export default typeDefs
