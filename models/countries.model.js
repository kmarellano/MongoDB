const mongoose = require("mongoose");
const { Schema } = mongoose;

const countriesModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  NUMCODE: { type: String, required: true },
  ALPHACODE: { type: String, required: true },
  NAME: { type: String, required: true },
  ALPHACODE3CHAR: { type: String },
  REPORTDISTRICT: { type: String },
  JCBCONTINENTID: { type: String },
  NAMESTRINGID: { type: Number, required: true },
});

module.exports = mongoose.model("countries", countriesModel);
