const fs = require("fs");

const path = require("path");

const getDataFromFile = () => {
  const jsonData = fs.readFileSync(
    path.join(__dirname, "../db/db.json"),
    "utf-8"
  );

  return JSON.parse(jsonData);
};

const writeDataToFile = (jsonData) => {
  fs.writeFileSync(path.join(__dirname, "../db/db.json"), jsonData);
};

module.exports = {
  getDataFromFile,
  writeDataToFile,
};
