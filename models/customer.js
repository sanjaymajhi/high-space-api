const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Customer = new Schema({
  cust_id: { type: Number, required: true },
  f_name: { type: String, min: 1, max: 20, required: true },
  l_name: { type: String, min: 1, max: 20, required: true },
  age: { type: Number, required: true },
  sex: { type: String, enum: ["M", "F", "O"], required: true },
});

module.exports = mongoose.model("Customer-HS", Customer);
