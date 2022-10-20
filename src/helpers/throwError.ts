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
function throwSomethingWhentWrong() {
    throw new GraphQLError("Something went wrong.")
}
export { isAuthorised, throwUnauthorised, throwSomethingWhentWrong }
