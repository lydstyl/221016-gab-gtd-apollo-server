import { GraphQLError } from "graphql"
import bcrypt from "bcrypt"
import User from "../models/User.js"
import { MyContext } from "../types.js"

// Query
const getUsers = async (parent, args, context: MyContext, info) => {
    console.log(JSON.stringify(context, null, 4))

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
const deleteUser = async (_, { email }) => {
    const user = await User.findOne({ email }).exec()
    user.deleteOne()
    return user
}

export { getUsers, addUser, deleteUser }
