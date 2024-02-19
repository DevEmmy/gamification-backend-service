import mongoose, { Schema } from "mongoose";

const shema = new mongoose.Schema({
    game: {
        type: Schema.Types.ObjectId,
        ref: "Games"
    },
    userId:{
        type: String,
    },
    amountStaked: {
        type: Number,
        required: true,
    },
    amountGotten: {
        type: Number,
        required: true
    },
    win: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
})

const History = mongoose.model("History", shema);
export default History;