const mongoose = require("mongoose");

let connectionString = "mongodb://localhost:27017/myGame";

mongoose.connect(connectionString);

module.exports = mongoose

