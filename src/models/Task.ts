import mongoose, { Schema } from "mongoose"

const TaskSchema = new mongoose.Schema({
    // _id: Schema.Types.ObjectId,
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
    labels: [{ type: Schema.Types.ObjectId, ref: "Label" }],
})

export default mongoose.model("Task", TaskSchema)
