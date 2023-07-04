const express = require("express");
const cors = require("cors");

const app = express();

// app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
});

app.get("/test", (req, res) => {
  console.log("TEST ----- TEST");
  res.json({ message: "TEST" });
});

app.listen(5001, () => {
  console.log("app is listening on port 5001");
});
