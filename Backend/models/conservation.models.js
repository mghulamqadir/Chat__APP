import mongoose, { Schema, model } from "mongoose";

const conservationSchema = new Schema({
    participant: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }

    ]
}, { timestamps: true })

const Conservation = model("Conservation", conservationSchema)

export default Conservation