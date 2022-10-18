import bcrypt from "bcrypt"
import User from "../models/User.js"

function createTokenWithEmail(email) {
    return "myToken" + email // TODO generate token with email
}

// Query
const login = async (parent, { email, password }) => {
    // Find user with email
    const user = await User.findOne({ email }).exec()

    // Compare user encryptedPassword with password
    const match = await bcrypt.compare(password, user.encryptedPassword)

    if (match) {
        //login
        console.log("same pass")

        // create a token (with email)
        const token = createTokenWithEmail(email)
        return { token }
    } else {
        console.log("wrong pass")

        return null
    }
}

// Mutation

export { login }
