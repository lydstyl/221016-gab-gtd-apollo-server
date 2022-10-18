import User from "../models/User.js"

function createTokenWithEmail(email) {
    return "myToken" + email // TODO generate token with email
}

// Query
const login = async (parent, { email, password }) => {
    // Encrypt password (TODO)
    // Find user with email
    const user = await User.findOne({ email }).exec()

    // Compare user encryptedPassword with password
    if (user.encryptedPassword === password) {
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
