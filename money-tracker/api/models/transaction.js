const mongoose = require("mongoose");
import { model, Schema } from "mongoose";

const transactionSchema = new Schema({
  name: { type: String, required: true },
  desciption: { type: String, required: true },
  date: { type: Date, required: true },
});

const transactionModel = model("Transaction", transactionSchema);

module.exports = transactionModel;
