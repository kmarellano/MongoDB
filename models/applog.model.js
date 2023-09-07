const mongoose = require("mongoose");
const { Schema } = mongoose;

const applogModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  LOGGROUPKEY: { type: String },
  EODSERNO: { type: Number, required: true },
  EODCYCLESERNO: { type: Number },
  PARTITIONKEY: { type: Number, required: true },
  TABNAME: { type: String, required: true },
  COLNAME: { type: String },
  ROWSERNO: { type: Number, required: true },
  ROWPARTITIONKEY: { type: Number },
  DATETIMESTAMP: { type: Date, required: true },
  ACTIONTYPE: { type: String, required: true },
  ACTION: { type: String },
  USERNAME: { type: String },
  REQUESTORID: { type: String },
  OLDVALUE: { type: String },
  NEWVALUE: { type: String },
  CONVERTED: { type: Number },
});

module.exports = mongoose.model("applog", applogModel);
