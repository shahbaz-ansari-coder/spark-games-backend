import express from 'express';
import { loginUser } from '../controllers/authController.js';
import { addGame, deleteGame, editGame, getAllGames } from '../controllers/gameController.js';

const router = express.Router();

router.post('/login' , loginUser);
router.post('/add', addGame);
router.put('/update/:id', editGame);
router.delete('/delete/:id', deleteGame);
router.get('/get-all' ,  getAllGames)

export default router