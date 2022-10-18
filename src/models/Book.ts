import mongoose from "mongoose"

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
})

export default mongoose.model("Book", BookSchema)
