import { MyContext } from "../types.js"
import Label from "../models/Label.js"
import {
    isAuthorised,
    throwUnauthorised,
    throwSomethingWhentWrong,
} from "../helpers/throwError.js"

// Query
// const getTasks = async (_parent, _args: any, context: MyContext, _info) => {
//     try {
//         if (isAuthorised(context)) {
//             const result = await Task.find({ user: context.email })
//             return result
//         } else {
//             throwUnauthorised()
//         }
//     } catch (error) {
//         console.log(`gb🚀 ~ getTasks ~ error`, error)
//         throwSomethingWhentWrong()
//     }
// }

// Mutation
const addLabel = async (
    _parent,
    { name, position },
    context: MyContext,
    _info
) => {
    try {
        if (isAuthorised(context)) {
            const newItem = await new Label({
                name,
                user: context.email,
                position,
                tasks: [],
            })
            newItem.save()
            return newItem
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ addLabel ~ error`, error)
        throwSomethingWhentWrong()
    }
}
// const updateTask = async (_parent, args, context: MyContext, _info) => {
//     try {
//         if (isAuthorised(context)) {
//             const { id } = args
//             const task = await Task.findById(id).exec()
//             if (args.name) {
//                 task.name = args.name
//             }
//             if (args.link) {
//                 task.link = args.link
//             }
//             if (args.fixedDate) {
//                 task.fixedDate = args.fixedDate
//             }
//             task.save()
//             console.log("Task updated !")
//             return task
//         } else {
//             throwUnauthorised()
//         }
//     } catch (error) {
//         console.log(`gb🚀 ~ updateTask ~ error`, error)
//         throwSomethingWhentWrong()
//     }
// }
// const deleteTask = async (_parent, { id }, context: MyContext, _info) => {
//     try {
//         if (isAuthorised(context)) {
//             const task = await Task.findOne({ user: context.email, id }).exec()
//             task.deleteOne()
//             console.log("delete task")
//             return task
//         } else {
//             throwUnauthorised()
//         }
//     } catch (error) {
//         console.log(`gb🚀 ~ deleteTask ~ error`, error)
//         throwSomethingWhentWrong()
//     }
// }

export {
    addLabel,
    //, getTasks, updateTask, deleteTask
}
