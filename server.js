// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/index.html"));
});

app.get("/portfolio", function (req, res) {
  res.sendFile(path.join(__dirname, "./public/html/portfolio.html"));
});
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
