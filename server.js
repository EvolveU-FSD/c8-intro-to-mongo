const express = require("express");
const {
  chooseDoorFunction,
  createGameState,
  loadGameState,
  getScore,
} = require("./chooseDoorFunction");
const app = express();

app.get("/startGame", (req, res) => {
  res.send(
    `Welcome to the game, please enter your name: 
    curl http://localhost:5000/chooseName?name={yourName}
    or to load a previous game:
    curl http://localhost:5000/loadGame?gameId={gameId}`
  );
});
app.get("/loadGame", async (req, res) => {
  let gameId = req.query.gameId;
  let gameState = await loadGameState(gameId);
  console.log(gameState);
  res.send(`Game has been loaded, welcome ${gameState.name}
  to continue please choose door 1 or door 2,
  curl http://localhost:5000/chooseDoor?door={number}`);
});
app.get("/chooseName", async (req, res) => {
  let name = req.query.name;
  let createdGame = await createGameState(name);
  console.log("createdGame is", createdGame);
  res.send(
    `Hello ${name}, to continue please choose door 1 or door 2, 
    curl http://localhost:5000/chooseDoor?door={number}, your gameId to continue later is:
    ${createdGame._id}`
  );
});

app.get("/chooseDoor", (req, res) => {
  let door = req.query.door;
  let answer = chooseDoorFunction(door);
  res.send(answer);
});

app.get("/score", (req, res) => {
  let score = getScore();
  res.send(`Your score is: ${score}`);
});

app.listen(5000, () => console.log("listening on 5000"));
