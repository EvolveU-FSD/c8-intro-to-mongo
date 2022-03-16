const express = require("express");


const gameRouter = require("./routes/gameRoutes");
const app = express();

app.use("/api", gameRouter);

app.listen(5000, () => console.log("listening on 5000"));
