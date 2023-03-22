const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json("Hello World!!,Are you ok");
});

app.listen(5000, () => console.log("server is running..."));
