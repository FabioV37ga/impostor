import mongoose from "mongoose";
import player from "./player.model.js";

const lobbySchema:mongoose.Schema = new mongoose.Schema({
    id: String,
    inviteCode: {type: String, required: true},
    words: [String],
    players: [player], 
    status: {
        type: String,
        enum: ["waiting", "playing", "voting", "finished"],
        default: "waiting"
    }
})

export default mongoose.model("lobby", lobbySchema)