import { GraphQLError } from "graphql"
import { MyContext } from "../types"
function isAuthorised(context: MyContext) {
    return context.authScope !== "unauthorised"
}
function throwUnauthorised() {
    throw new GraphQLError("Unauthorised !", {
        extensions: { code: "UNAUTHORISED" },
    })
}
function throwSomethingWhentWrong(msg?: string) {
    throw new GraphQLError(`Something went wrong. ${msg}`)
}
export { isAuthorised, throwUnauthorised, throwSomethingWhentWrong }
