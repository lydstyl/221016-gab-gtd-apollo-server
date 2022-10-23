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
        console.log(`gb🚀 ~ getTasks ~ error`, error.message)
        throwSomethingWhentWrong()
    }
}

// Mutation
const addTask = async (_parent, args, context: MyContext, _info) => {
    const { name, link, fixedDate, labels } = args
    try {
        if (isAuthorised(context)) {
            const item = await new Task({ name, user: context.email })
            if (link) {
                item.link = link
            }
            if (fixedDate) {
                item.fixedDate = fixedDate
            }
            if (labels) {
                // // uniqueLabelsId = getUniques(labels)
                // // // // TODO test it update label tasks id
                // // uniqueLabelsId.forEach(async labelId => {
                // //     console.log(`gb🚀 ~ addTask ~ labelId`, labelId)
                // //     const label = await Label.findById(labelId).exec()
                // //     label.tasks = getUniques([...label.tasks, item._id]) // or item._id ?
                // //     label.save()
                // // })

                // console.log(`gb🚀 ~ addTask ~ item.id`, item.id, item._id)
                // const label = await Label.findById(labels[0]).exec() // to do foreach label
                // label.tasks = [...label.tasks, item.id]
                // label.save()

                item.labels = labels
                // item.labels = getUniques(labels) // or item._id ?
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
            const { id, name, link, fixedDate, labels } = args
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
            if (labels) {
                // item.labels = labels // TODO update label task ids ... or only available this possibility when
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
const addOneLabelToTask = async (_parent, args, context: MyContext, _info) => {
    console.log(`gb🚀 ~ updateTask ~ args`, args)
    try {
        if (isAuthorised(context)) {
            const { id, label } = args
            const item = await Task.findById(id).exec()
            item.labels = [...item.labels, label]
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

export { addTask, getTasks, updateTask, deleteTask }
