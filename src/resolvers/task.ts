import { GraphQLError } from "graphql"
import { MyContext } from "../types.js"
import Task from "../models/Task.js"
import { TaskType } from "../types/task.js"

// Query
const getTasks = async (parent, args, context: MyContext, info) => {
    if (context.authScope !== "unauthorised") {
        const result = await Task.find({ user: context.email }) //     const user = await User.findOne({ email }).exec() //.find({ name: 'john', age: { $gte: 18 } }).exec();
        return result
    } else {
        throw new GraphQLError("Unauthorised !", {
            extensions: { code: "UNAUTHENTICATED" }, // TODO change the code ?
        })
    }
}

// Mutation
const addTask = async (parent, args: TaskType) => {
    const newItem = await new Task(args)
    newItem.save()
    return newItem
}
// const deleteUser = async (_, { email }) => {
//     const user = await User.findOne({ email }).exec()
//     user.deleteOne()
//     return user
// }

export { addTask, getTasks }
