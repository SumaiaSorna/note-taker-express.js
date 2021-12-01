const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = 4000;

const app = express();

app.use(routes);

app.listen(PORT, () =>
  console.log(`🚀🚀 server running on http://localhost:${PORT}`)
);
