const { findGameById, createGame, updateGameById } = require("./mongoDb");

let gameState = {
  score: 0,
  name: "",
};
const loadGameState = async (id) => {
  let loadedGameState = await findGameById(id);
  gameState = loadedGameState;
  return gameState;
};
const createGameState = async (name) => {
  let newGameState = await createGame({ name: name, score: 0 });
  let newGameId = newGameState.insertedId;
  let game = await findGameById(newGameId);
  gameState = game;
  return gameState;
};
const chooseDoorFunction = (door) => {
  let message;
  if (door === "1") {
    gameState.score = gameState.score - 1;
    message =
      "wrong door, you lose " +
      gameState.name +
      ". To play again curl http://localhost:5000/startGame";
  } else if (door === "2") {
    gameState.score = gameState.score + 1;
    message =
      gameState.name +
      ", you win.  To play again curl http://localhost:5000/startGame";
  }
  updateGameById(gameState._id, gameState);
  return message;
};

const getScore = () => {
  return gameState.score;
};

module.exports = {
  chooseDoorFunction,
  loadGameState,
  createGameState,
  getScore,
};
