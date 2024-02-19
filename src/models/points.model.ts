import mongoose from "mongoose";

const shema = new mongoose.Schema({
    value: {
        type: Number,
        default: 0
    },
    previousValue: {
        type: Number
    },
    userId: {
        type: String
    }
},
{
    timestamps: true
})

const Points = mongoose.model("Points", shema);
export default Points;