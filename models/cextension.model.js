const mongoose = require("mongoose");
const { Schema } = mongoose;

const cExtensionModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  ROWSERNO: { type: Number, required: true },
  TABINDICATOR: { type: String, required: true },
  FIELDNO: { type: Number, required: true },
  VALUE: { type: String },
  LOGACTION: { type: String },
  ACTIONDATE: { type: Date },
  ENTITYVERSIONNO: { type: Number },
  CONVERTED: { type: Number },
});

module.exports = mongoose.model("cExtension", cExtensionModel);
