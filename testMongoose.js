const {
  createGame,
  updateGameById,
  findAllGames,
  deleteGameById,
} = require("./db/gameModel");
async function test() {
  // let createdGame = await createGame({ name: "Danielle" });
  // console.log(createdGame);

  // let updated = await updateGameById("623212c323c49ca11a1da8d2", {
  //   score: 2,
  // });
  // console.log(updated);

  // let allGames = await findAllGames();
  // console.log(allGames);

  let deletedGame = await deleteGameById("623212c323c49ca11a1da8d2");
  console.log(deletedGame);
}

test();
