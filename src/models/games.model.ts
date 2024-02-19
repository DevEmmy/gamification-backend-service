import mongoose, { Document, Model } from "mongoose";
import { Schema } from "mongoose";

export interface GameDocument extends Document{
    title: string
    cover: string
    description: string,
    howToPlay: string
    createdAt: Date
}


const shema: Schema<GameDocument> = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    description: {
        type: String
    },
    howToPlay: {
        type: String
    }
},
{
    timestamps: true
})


const Games: Model<GameDocument> = mongoose.model<GameDocument>("Games", shema);
export default Games;