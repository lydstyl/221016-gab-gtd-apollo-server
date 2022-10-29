import mongoose, { Schema } from "mongoose"

const LabelSchema = new Schema({
    // _id: Schema.Types.ObjectId,
    user: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
        // unique: true,
    },
    position: {
        type: Number,
    },
    color: {
        type: String,
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: "Task" }],
})

export default mongoose.model("Label", LabelSchema)
