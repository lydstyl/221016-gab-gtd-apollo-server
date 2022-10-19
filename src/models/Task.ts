import mongoose, { Schema } from "mongoose"

const LabelSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    position: {
        type: Number,
        required: true,
    },
})

const TaskSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    link: String,
    fixedDate: Date, // '2002-12-09'
    labels: [LabelSchema],
})

export default mongoose.model("Task", TaskSchema)
