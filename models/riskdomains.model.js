const mongoose = require("mongoose");
const { Schema } = mongoose;

const riskDomainModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  TABINDICATOR: { type: String, required: true },
  PRIMARYENTITYSERNO: { type: Number },
  CCUSTSERNO: { type: Number },
  HIERARCHYSERNO: { type: Number },
  NUMBERX: { type: String },
  NAME: { type: String },
  MAKEAUTHGROUPS: { type: Number, required: true },
  AUTHCURRENCY: { type: String },
  AUTHLIMIT: { type: Number },
  AUTHLIMITPERIOD: { type: Number },
  AUTHALLTRXN: { type: Number },
  AUTHALLTRXNPERIOD: { type: Number },
  AUTHUSAGECODE: { type: Number },
  AUTHDECLINETRXN: { type: Number },
  AUTHDECLINELIMIT: { type: Number },
  AUTHDECLINEPERIOD: { type: Number },
  AUTHCASHLIMIT: { type: Number },
  AUTHCASHTRXN: { type: Number },
  AUTHCASHPERIOD: { type: Number },
  AUTHTEBONUS: { type: Number },
  AUTHTMPBONUS: { type: Number },
  AUTHTMPBONUSSTARTDATE: { type: Date },
  AUTHTMPBONUSDATE: { type: Date },
  AUTHTMPBONUSTRXNS: { type: Number },
  AUTHTMPCASHBONUSAMOUNT: { type: Number },
  AUTHTMPCASHBONUSTRXNS: { type: Number },
  AUTHTMPCASHBONUSSTARTDATE: { type: Date },
  AUTHTMPCASHBONUSPURGEDATE: { type: Date },
  EXTRAAUTHLIMIT: { type: Number },
  AUTH1TRXNLIMIT: { type: Number },
  AUTHBLOCKEDLIMIT: { type: Number },
  AUTHACCOUNTTYPE: { type: String },
  AUTHMODEUSAGE: { type: Number },
  REPLENISHMENTDATEANCHOR: { type: Date },
  REPLENISHMENTCASHDATEANCHOR: { type: Date },
  STAUTHORIZATION: { type: String },
  CAPROFSERNO: { type: Number },
  DEBITHOSTPROFSERNO: { type: Number },
  LOGACTION: { type: String },
  ENTITYVERSIONNO: { type: Number },
  CONVERTED: { type: Number },
  AUTHSHADOWEXTRALIMIT: { type: Number },
  AUTHSHADOWEXTRACASHLIMIT: { type: Number },
});

module.exports = mongoose.model("riskDomain", riskDomainModel);
