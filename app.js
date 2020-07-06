const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello from docker!");
});

app.listen(3001, function () {
  console.log("App listening on 3001");
});
