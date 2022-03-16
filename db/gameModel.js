const mongoose = require("./mongoose");

const gameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  createdAt: { type: Date, default: new Date() },
});
const Game = mongoose.model("Game", gameSchema);

const createGame = async (newGameData) => {
  let result = await Game.create(newGameData);
  // let newGame = new Game(newGameData)
  // newGame.save()

  return result;
};
const findGameById = async (id) => {
  let game = await Game.findById(id);
  return game;
};

const updateGameById = async (id, newGameData) => {
  let updated = await Game.findByIdAndUpdate(id, newGameData, { new: true });
  return updated;
};

const findAllGames = async () => {
  let gameArray = await Game.find();
  return gameArray;
};
const deleteGameById = async (itemToDelete) => {
  let deletedGame = await Game.findByIdAndDelete(id);
  
  return deletedGame;
};
module.exports = {
  deleteGameById,
  createGame,
  findGameById,
  updateGameById,
  findAllGames,
};
