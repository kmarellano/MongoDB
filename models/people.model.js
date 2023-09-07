const mongoose = require("mongoose");
const { Schema } = mongoose;

const peopleModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  TITLE: { type: String },
  LASTNAME: { type: String, required: true },
  FIRSTNAME: { type: String },
  MIDNAME: { type: String },
  MOTHERNAME: { type: String },
  ORGANIZATION: { type: String },
  DEPARTMENT: { type: String },
  POSITION: { type: String },
  DOB: { type: Date },
  PERSONTYPE: { type: Number },
  SEX: { type: String },
  MARITALSTATUS: { type: String },
  SSNUMBER: { type: String },
  CUSTIDNUMBER: { type: String },
  RESIDENT: { type: String },
  LEGALENTITY: { type: Number, required: true },
  EMPLOYEEID: { type: String },
  STGENERAL: { type: String, required: true },
  LANGUAGECODE: { type: String },
  LOGACTION: { type: String },
  LL_TITLE: { type: String },
  LL_FIRSTNAME: { type: String },
  LL_MIDNAME: { type: String },
  LL_LASTNAME: { type: String },
  LL_MOTHERNAME: { type: String },
  LL_ORGANIZATION: { type: String },
  LL_DEPARTMENT: { type: String },
  LL_POSITION: { type: String },
  ENTITYVERSIONNO: { type: Number },
  CONVERTED: { type: Number },
  EXTERNALREFERENCE: { type: String },
});

module.exports = mongoose.model("people", peopleModel);
