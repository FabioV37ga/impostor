import mongoose from "mongoose";

const playerSchema:mongoose.Schema = new mongoose.Schema({
    id: {type : String},
    nickname: {type: String, required: true},
    char: {type: String, required: true},
    isHost: {type: Boolean, required: true}
}, {_id: false})

export default mongoose.model("Player", playerSchema)

