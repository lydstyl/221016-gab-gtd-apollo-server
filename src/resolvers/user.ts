import User from "../models/User.js"

// Query
const getUsers = async () => {
    const result = await User.find()
    return result
}

// Mutation
const addUser = (_, { email, password }) => {
    // parent and args ?
    const newItem = new User({
        email,
        encryptedPassword: password, // TODO encrypt password
    })
    newItem.save()
    return newItem
}
const deleteUser = async (_, { id }) => {
    const result = await User.findByIdAndRemove(id)
    return result
}

export { getUsers, addUser, deleteUser }
