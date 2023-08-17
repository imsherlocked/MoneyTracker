const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("api/transaction", (req, res) => {
  res.json(req.body);
});

app.listen(4000);
