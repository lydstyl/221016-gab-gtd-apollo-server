import { MyContext } from "../types.js"
import Task from "../models/Task.js"
import {
    isAuthorised,
    throwUnauthorised,
    throwSomethingWhentWrong,
} from "../helpers/throwError.js"
import Label from "../models/Label.js"

function getUniques(myArray: Array<string>) {
    return myArray.filter((v, i, a) => a.indexOf(v) === i)
}

// Query
const getTasks = async (_parent, _args: any, context: MyContext, _info) => {
    try {
        if (isAuthorised(context)) {
            const result = await Task.find({ user: context.email }).populate(
                "labels"
            )
            return result
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        throwSomethingWhentWrong(error.message)
    }
}
const getTask = async (_parent, args: any, context: MyContext, _info) => {
    const { id } = args
    try {
        if (isAuthorised(context)) {
            const result = await Task.findById(id).populate("labels")
            return result
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        throwSomethingWhentWrong(error.message)
    }
}

// Mutation
const addTask = async (_parent, args, context: MyContext, _info) => {
    const { name, link, fixedDate } = args
    try {
        if (isAuthorised(context)) {
            const item = await new Task({ name, user: context.email })
            if (link) {
                item.link = link
            }
            if (fixedDate) {
                item.fixedDate = fixedDate
            }
            item.save()
            return item
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ addTask ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}
const updateTask = async (_parent, args, context: MyContext, _info) => {
    console.log(`gb🚀 ~ updateTask ~ args`, args)
    try {
        if (isAuthorised(context)) {
            const { id, name, link, fixedDate } = args
            const item = await Task.findById(id).exec()
            if (name) {
                item.name = name
            }
            if (link) {
                item.link = link
            }
            if (fixedDate) {
                item.fixedDate = fixedDate
            }
            console.log(`gb🚀 ~ updateTask ~ item`, item)
            item.save()
            console.log("Task updated !")
            return item
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ updateTask ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}
const deleteTask = async (_parent, { id }, context: MyContext, _info) => {
    try {
        if (isAuthorised(context)) {
            const task = await Task.findOne({ user: context.email, id }).exec()
            task.deleteOne()
            console.log("delete task")
            return task
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ deleteTask ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}
const addOneLabelToTask = async (
    _parent,
    { labelId, taskId },
    context: MyContext,
    _info
) => {
    try {
        if (isAuthorised(context)) {
            const task = await Task.findById(taskId).exec()
            const label = await Label.findById(labelId).exec()
            task.labels.push(label.id)
            label.tasks.push(task.id)
            await task.save()
            await label.save()
            console.log(`gb🚀 ~ addOneLabelToTask ~ task`, task)
            console.log("Label added to task !")
            return task
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ updateTask ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}
const removeOneLabelFromTask = async (
    _parent,
    { labelId, taskId },
    context: MyContext,
    _info
) => {
    try {
        if (isAuthorised(context)) {
            const task = await Task.findById(taskId).exec()
            const label = await Label.findById(labelId).exec()
            task.labels = task.labels.filter(
                label => label.toString() !== labelId
            )
            label.tasks = label.tasks.filter(task => task.toString() !== taskId)
            await task.save()
            await label.save()
            console.log(`gb🚀 ~ addOneLabelToTask ~ task`, task)
            console.log("Label added to task !")
            return task
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ updateTask ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}
export {
    addTask,
    getTask,
    getTasks,
    updateTask,
    deleteTask,
    addOneLabelToTask,
    removeOneLabelFromTask,
}
