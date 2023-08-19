import express, { json } from "express";
import cors from "cors";
import { connect } from "mongoose";
// const Transaction = require("./models/transaction.js");
const app = express();
app.use(cors());
app.use(json());
app.get("/api/test", (req, res) => {
  res.json("test ok");
});

app.post("/api/transaction", (req, res) => {
  console.log(process.env.MONGO_URL);
  connect(
    "mongodb+srv://shivamnahar09:RnUAQKeDqcGvEkZa@cluster0.lqtew8m.mongodb.net/"
  );
  const { name, description, date } = req.body;

  res.json(req.body);
});

app.listen(4000);
