import Game from '../models/gamesModel.js';

// Add new game
export const addGame = async (req, res) => {
    try {
        const {
            name,
            price,
            category,
            downloadLink,
            thumbnail,
            screenshot,
            description,
            systemRequirements
        } = req.body;

        if (!name || !price || !category || !downloadLink || !thumbnail || !screenshot || !description || !systemRequirements) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const newGame = await Game.create({
            name,
            price,
            category,
            downloadLink,
            thumbnail,
            screenshot,
            description,
            systemRequirements
        });

        res.status(201).json({ success: true, message: 'Game added successfully', game: newGame });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};

// ✅ Delete game by ID
export const deleteGame = async (req, res) => {
    try {
        const { id } = req.params;

        const game = await Game.findByIdAndDelete(id);

        if (!game) {
            return res.status(404).json({ success: false, message: 'Game not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Game deleted successfully',
            deletedGame: game
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error while deleting game',
            error: error.message
        });
    }
};

// Get all games
export const getAllGames = async (req, res) => {
    try {
        const games = await Game.find();

        if (!games || games.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No games found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Games fetched successfully",
            games
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};
