const app = require("../index.js");
// return notes.html file
const path = require("path");

// sendFile will go here
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// return index.html file
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
