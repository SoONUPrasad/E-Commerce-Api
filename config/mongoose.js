const mongoose = require("mongoose");

// Connect to the database
mongoose.connect("mongodb://127.0.0.1:27017/E-comm", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to MongoDB"));

db.once("open", function () {
  console.log("Successfully connected to Database");
});

module.exports = db;
