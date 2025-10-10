import mongoose from 'mongoose';

const gameSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    downloadLink: { type: String, required: true },
    thumbnail: { type: String, required: true },
    screenshot: { type: String, required: true },
    description: { type: String, required: true },
    systemRequirements: { type: String, required: true },
}, { timestamps: true });

const Game = mongoose.model('Game', gameSchema);
export default Game;
