const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/test", (req, res) => {
  console.log("TEST ----- TEST");
  res.json({ message: "TEST" });
});

app.listen(5001, () => {
  console.log("app is listening on port 5001");
});
