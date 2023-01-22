import { GraphQLError } from "graphql"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import { MyContext } from "../types.js"
import { isAuthorised, throwUnauthorised } from "../helpers/throwError.js"
import { Task } from "../typeDefs/task.js"

// Query
const getUsers = async (parent, args, context: MyContext, info) => {
    if (context.authScope !== "admin") {
        throw new GraphQLError("Not admin !", {
            extensions: { code: "UNAUTHENTICATED" }, // TODO change the code ?
        })
    } else {
        const result = await User.find()
        return result
    }
}

// Mutation
const addUser = async (_, { email, password }) => {
    // parent and args ?
    const saltRounds = 10
    const encryptedPassword = await bcrypt.hash(password, saltRounds)
    const newItem = await new User({
        email,
        encryptedPassword,
    })
    newItem.save()
    return newItem
}

const deleteUser = async (_parent, { email }, context: MyContext, _info) => {
    const isAdmin = context.authScope === "admin"
    const isThisAccountUser = isAuthorised(context) && email === context.email
    try {
        if (isAdmin || isThisAccountUser) {
            const user = await User.findOne({ email }).exec()
            user.deleteOne()
            return user
        } else {
            throwUnauthorised()
        }
    } catch (error) {
        console.log(`gb🚀 ~ deleteUser ~ error`, error.message)
        throwUnauthorised()
    }
}

export { getUsers, addUser, deleteUser }
