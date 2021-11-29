const app = require("../index.js");
const path = require("path");

// return notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// return index.html file
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
