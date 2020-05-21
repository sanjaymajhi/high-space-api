const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Address = new Schema({
  cust_id: { type: Schema.Types.ObjectId, ref: "Customer-HS" },
  h_no: { type: String, required: true },
  s_no: { type: Number, required: true },
  city: { type: String, min: 1, max: 40, required: true },
  state: { type: String, min: 1, max: 25, required: true },
});

module.exports = mongoose.model("Address-HS", Address);
