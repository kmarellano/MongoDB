const mongoose = require("mongoose");
const { Schema } = mongoose;

const currenciesModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  NUMCODE: { type: String, required: true, ref: "cAccounts" },
  ALPHACODE: { type: String, required: true },
  NAME: { type: String, required: true },
  NAMESTRINGID: { type: Number, required: true },
  DECDIGITS: { type: Number, required: true },
  VISADIGITS: { type: Number, required: true },
  MCDIGITS: { type: Number, required: true },
});

module.exports = mongoose.model("currencies", currenciesModel);
