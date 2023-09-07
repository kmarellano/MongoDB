const mongoose = require("mongoose");
const { Schema } = mongoose;

const cAccountRoutingModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  CACCSERNO: { type: Number, required: true },
  FROMCACCSERNO: { type: Number },
  CARDXSERNO: { type: Number },
  RTRXNTYPE: { type: Number, required: true },
  POSTONACCOUNT: { type: Number },
  REJTRXNSTATUS: { type: String },
  RISKDOMAINSERNO: { type: Number },
  LOGACTION: { type: String },
  CONVERTED: { type: Number },
});

module.exports = mongoose.model("cAccountRouting", cAccountRoutingModel);
