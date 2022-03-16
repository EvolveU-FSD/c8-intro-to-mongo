const express = require("express");
const router = express.Router();
const {
  chooseDoorFunction,
  createGameState,
  loadGameState,
  getScore,
  startGame,
} = require("../model/game");


router.get("/startGame", (req, res) => {
  let startMessage = startGame();
  res.send(startMessage);
});

router.get("/loadGame", async (req, res) => {
  let gameId = req.query.gameId;
  let loadedGameMessage = await loadGameState(gameId);
  res.send(loadedGameMessage);
});
router.get("/chooseName", async (req, res) => {
  let name = req.query.name;
  let responseMessage = await createGameState(name);
  res.send(responseMessage);
});

router.get("/chooseDoor", (req, res) => {
  let door = req.query.door;
  let answer = chooseDoorFunction(door);
  res.send(answer);
});

router.get("/score", (req, res) => {
  let score = getScore();
  res.send(`Your score is: ${score}`);
});

module.exports = router;
