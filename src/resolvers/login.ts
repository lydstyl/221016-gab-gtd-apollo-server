import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../models/User.js"

// Query
const login = async (parent, { email, password }) => {
    try {
        const user = await User.findOne({ email }).exec()
        const match = await bcrypt.compare(password, user.encryptedPassword)

        if (match) {
            const token = jwt.sign({ email }, process.env.JWT_SECRET, {
                expiresIn: "20h",
            })
            return { token, user: user.email }
        } else {
            console.log("wrong pass") // TODO throw GraphQl error

            return null
        }
    } catch (error) {
        console.log(`gb🚀 ~ login ~ error`, error)
    }
}

// Mutation

export { login }
