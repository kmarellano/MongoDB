const mongoose = require("mongoose");
const { Schema } = mongoose;

const trxnTypeModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  USEDFOR: { type: String, required: true },
  RECTYPE: { type: String, required: true },
  PRIORITY: { type: Number, required: true },
  CONDITION: { type: String },
  CHANNELSERNO: { type: Number },
  TRXNSTATUS: { type: String },
  TRXNGROUP: { type: String },
  SIGN: { type: String },
  CASHFLAG: { type: Number },
  OPTIONS: { type: Number },
  IGNOREVALUEDATE: { type: Number },
  LOGVERSION: { type: Number },
  INSTINTPROFSERNO: { type: Number },
  INSTFEEPROFSERNO: { type: Number },
  DESTINATION_INSTITUTION_ID: { type: Number },
  MINPAYPERCENTAGE: { type: Number },
  GLTRXNTYPESERNO: { type: Number },
  TEXTDATARULE: { type: String },
  DESCRIPTIONRULE: { type: String },
  DESCRIPTIONSTRINGID: { type: Number },
  AUTHMODE: { type: Number },
  SENDTOONLINE: { type: Number },
  DEFAULTINTERESTTRXNTYPE: { type: Number },
});

module.exports = mongoose.model("trxnType", trxnTypeModel);
