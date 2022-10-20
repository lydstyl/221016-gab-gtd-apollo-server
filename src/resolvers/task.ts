import { GraphQLError } from "graphql"
import { MyContext } from "../types.js"
import Task from "../models/Task.js"
import { TaskType } from "../types/task.js"

// Query
const getTasks = async (_parent, _args: any, context: MyContext, _info) => {
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
const addTask = async (_parent, { name }, context: MyContext, _info) => {
    try {
        if (context.authScope === "unauthorised") {
            throw new GraphQLError("Unauthorised !", {
                extensions: { code: "UNAUTHENTICATED" }, // TODO change the code ?
            })
        } else {
            console.log("authorised")
            const newItem = await new Task({ name, user: context.email })
            newItem.save()
            return newItem
        }
    } catch (error) {
        return null
    }
}
const deleteTask = async (_parent, { id }, context: MyContext, _info) => {
    try {
        if (context.authScope === "unauthorised") {
            throw new GraphQLError("Unauthorised !", {
                extensions: { code: "UNAUTHENTICATED" }, // TODO change the code ?
            })
        } else {
            const task = await Task.findOne({ user: context.email, id }).exec()
            task.deleteOne()
            console.log("delete task")
            return task
        }
    } catch (error) {}
}

export { addTask, getTasks, deleteTask }
