import mongoose, { Schema } from "mongoose"

const LabelSchema = new Schema({
    name: {
        type: String,
        required: true,
        // unique: true,
    },
    position: {
        type: Number,
        required: true,
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
})

export default mongoose.model("Task", LabelSchema)
