import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    encryptedPassword: {
        type: String,
    },
})

export default mongoose.model("User", UserSchema)
