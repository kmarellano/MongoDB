const mongoose = require("mongoose");
const { Schema } = mongoose;

const productsModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  SHORTCODE: { type: String, required: true },
  GROUPCODE: { type: String },
  NAME: { type: String, required: true },
  NAMESTRINGID: { type: Number, required: true },
  DESCRIPTION: { type: String },
  DESCRIPTIONSTRINGID: { type: Number, required: true },
  APPLIESTOCUSTOMER: { type: String, required: true },
  APPLIESTOACCOUNT: { type: String, required: true },
  APPLIESTOCARD: { type: String, required: true },
  APPLIESTORISKDOMAIN: { type: String, required: true },
  APPLIESTOPROXYCARD: { type: String, required: true },
  APPLIESTOMERCUSTOMER: { type: String, required: true },
  APPLIESTOMERACCOUNT: { type: String, required: true },
  APPLIESTOMERCHANT: { type: String, required: true },
  APPLIESTOTERMINAL: { type: String, required: true },
  APPLIESTOLOAN: { type: String, required: true },
});

module.exports = mongoose.model("products", productsModel);
