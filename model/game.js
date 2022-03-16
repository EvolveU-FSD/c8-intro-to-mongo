const { findGameById, createGame, updateGameById } = require("../db/gameModel");

let gameState = {
  score: 0,
  name: "",
};
const startGame = () => {
  return `<p>Welcome to the game, please enter your name: </p>
  <input id="name" />
  <a id="link"><button>Go</button></a>
  <script>
  let nameInput = document.getElementById('name')
  console.log(nameInput)
    nameInput.addEventListener('keyup',(e)=>{
      console.log('hey')
      let link = document.getElementById('link')
      link.setAttribute('href','http://localhost:5000/api/chooseName?name='+e.target.value)

    })
  </script>`;
  // return `Welcome to the game, please enter your name:
  // curl http://localhost:5000/api/chooseName?name={yourName}
  // or to load a previous game:
  // curl http://localhost:5000/api/loadGame?gameId={gameId}`;
};

const loadGameState = async (id) => {
  let loadedGameState = await findGameById(id);
  gameState = loadedGameState;
  let returnMessage = `Game has been loaded, welcome ${gameState.name}
  to continue please choose door 1 or door 2,
  curl http://localhost:5000/api/chooseDoor?door={number}`;
  return returnMessage;
};

const createGameState = async (name) => {
  let newGameState = await createGame({ name: name, score: 0 });
  let newGameId = newGameState._id;
  let game = await findGameById(newGameId);
  gameState = game;
  let message = `<p>Hello ${name}, to continue please choose door 1 or door 2,</p> 
  <a href=http://localhost:5000/api/chooseDoor?door=1>Door 1</a> or 
  <a href=http://localhost:5000/api/chooseDoor?door=2>Door 2</a>,
   your gameId to continue later is:
  ${game._id}`;
  return message;
};

const chooseDoorFunction = (door) => {
  let message;
  if (door === "1") {
    gameState.score = gameState.score - 1;
    message =
      "wrong door, you lose " +
      gameState.name +
      ". To play again curl http://localhost:5000/api/startGame";
  } else if (door === "2") {
    gameState.score = gameState.score + 1;
    message =
      gameState.name +
      ", you win.  To play again curl http://localhost:5000/api/startGame";
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
  startGame,
};
