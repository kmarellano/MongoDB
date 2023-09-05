const mongoose = require("mongoose");
const { Schema } = mongoose;

const cAddressLinksModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  TABINDICATOR: { type: String, required: true },
  ROWSERNO: { type: Number, required: true },
  ADDRESSSERNO: { type: Number, required: true },
  ADDRESSTYPE: { type: String },
  FROMDATE: { type: Date },
  UNTILDATE: { type: Date },
  ADDRESSLINKTYPE1SOURCESERNO: { type: Number },
  ADDRESSLINKTYPE2SOURCESERNO: { type: Number },
  ADDRESSLINKTYPE3SOURCESERNO: { type: Number },
  ADDRESSLINKTYPE4SOURCESERNO: { type: Number },
  ADDRESSLINKTYPE5SOURCESERNO: { type: Number },
  LOGACTION: { type: String },
  CONVERTED: { type: Number },
});

module.exports = mongoose.model("cAddressLink", cAddressLinksModel);
