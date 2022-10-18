import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// Query
const login = async (parent, { email, password }) => {
    // Find user with email
    const user = await User.findOne({ email }).exec()

    // Compare user encryptedPassword with password
    const match = await bcrypt.compare(password, user.encryptedPassword)

    if (match) {
        console.log("same pass")

        // create a token (with email)
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: "20h",
        }) // TODO put secret in env var.

        return { token }
    } else {
        console.log("wrong pass")

        return null
    }
}

// Mutation

export { login }
