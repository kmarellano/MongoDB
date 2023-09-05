const mongoose = require("mongoose");
const { Schema } = mongoose;

const cStatementLinksModel = new Schema({
  INSTITUTION_ID: {
    type: Number,
    required: true,
  },
  STATEMENTSERNO: {
    type: Number,
    required: true,
  },
  PARTITIONKEY: {
    type: Number,
    required: true,
  },
  TRXNSERNO: {
    type: Number,
    required: true,
  },
  TRXNPARTITIONKEY: {
    type: Number,
    required: true,
  },
  BALSTMTSERNO: {
    type: Number,
  },
  BALSTMTPARTITIONKEY: {
    type: Number,
  },
  LINKTYPE: {
    type: String,
    required: true,
  },
  CARDSERNO: {
    type: Number,
  },
  SUMMARYINDICATOR: {
    type: Number,
  },
  FINANCIALINDICATOR: {
    type: Number,
  },
  CONVERTED: {
    type: Number,
  },
});

cStatementLinksModel.index({ STATEMENTSERNO: 1 }, { unique: true });

module.exports = mongoose.model("cStatementLink", cStatementLinksModel);
