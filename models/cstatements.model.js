const mongoose = require("mongoose");
const { Schema } = mongoose;

const cStatementsModel = new Schema({
  INSTITUTION_ID: { type: Number, required: true },
  SERNO: { type: Number, required: true },
  PARTITIONKEY: { type: Number, required: true },
  CACCSERNO: { type: Number, required: true },
  BATCHSERNO: { type: Number },
  CYCLEDATE: { type: Date },
  BILLINGDATE: { type: Date },
  GENERATEDATETIME: { type: Date },
  LASTPRINTDATE: { type: Date },
  PRINTCOUNT: { type: Number, required: true },
  CLOSINGBALANCE: { type: Number, required: true },
  OPENINGBALANCE: { type: Number, required: true },
  AVERAGEDAILYBALANCE: { type: Number, required: true },
  PAIDINFULLBALANCE: { type: Number, required: true },
  MINDUEAMOUNT: { type: Number, required: true },
  OVERDUEAMOUNT: { type: Number, required: true },
  WISHTOPAY: { type: Number },
  MINDUEAMOUNTWAIVED: { type: Number },
  CYCLEACTIVITY: { type: Number, required: true },
  TOTALCREDITS: { type: Number, required: true },
  TOTALDEBITS: { type: Number, required: true },
  TOTALPAYMENTS: { type: Number, required: true },
  TOTALINTEREST: { type: Number, required: true },
  EXCESSINTEREST: { type: Number, required: true },
  PENDINGINTEREST: { type: Number, required: true },
  RETURNEDPAYMENTS: { type: Number, required: true },
  BACKDATEDCREDITS: { type: Number, required: true },
  BACKDATEDDEBITS: { type: Number, required: true },
  BACKDATEDPAYMENTS: { type: Number, required: true },
  BACKDATEDRETURNEDPAYMENTS: { type: Number, required: true },
  EXCESSPAYMENTAMOUNT: { type: Number, required: true },
  LATEPAYMENTFEE: { type: Number },
  INSTALMENTCLOSINGBALANCE: { type: Number, required: true },
  INSTALMENTCLOSINGBALPRINCIPAL: { type: Number, required: true },
  INSTALMENTOPENINGBALANCE: { type: Number, required: true },
  CREDITLIMIT: { type: Number, required: true },
  OVERDUECYCLES: { type: Number, required: true },
  OVERDUEAGE: { type: Number },
  PAYMENTINDICATOR: { type: Number, required: true },
  CURRENCY: { type: String, required: true },
  DUEDATE: { type: Date },
  PRINTDUEDATE: { type: Date },
  OVERDUEDATE: { type: Date },
  CUREOVERDUEDATE: { type: Date },
  COLLECTORCASE: { type: Number },
  REPAYMENTPLANSERNO: { type: Number },
  REPAYMENTPLANPARTITIONKEY: { type: Number },
  REPAYMENTPLANCYCLE: { type: Number },
  APRBALANCE: { type: Number },
  APRPASTDUE: { type: Number },
  APRCASH: { type: Number },
  APRINSTALMENTS: { type: Number },
  NUMOFMONTHSTOPAYOFFWITHMINAMT: { type: Number },
  PMNTAMTTOPAYOFFIN12MONTHS: { type: Number },
  REASON: { type: String, required: true },
  SEQUENCE: { type: Number, required: true },
  CYCLEDAYS: { type: Number },
  PUSHCOUNTER: { type: Number },
  PUSHEDBILLINGDATE: { type: Date },
  PUSHEDPRINTDUEDATE: { type: Date },
  PREVSTMTSERNO: { type: Number },
  PREVSTMTPARTITIONKEY: { type: Number },
  RECALCALLOWED: { type: Number },
  RECALCMINDUEAMOUNT: { type: Number },
  RECALCOVERDUEAMOUNT: { type: Number },
  RECALCCYCLEACTIVITY: { type: Number },
  RECALCOVERDUECYCLES: { type: Number },
  RECALCOVERDUEAGE: { type: Number },
  RECALCOVERDUEDATE: { type: Date },
  RECALCPAYMENTINDICATOR: { type: Number },
  RECALCCLOSINGBALANCE: { type: Number },
  RECALCAVERAGEDAILYBALANCE: { type: Number },
  RECALCTOTALPAYMENTS: { type: Number },
  RECALCTOTALINTEREST: { type: Number },
  RECALCEXCESSINTEREST: { type: Number },
  RECALCEXCESSPAYMENTAMOUNT: { type: Number },
  RECALCCUREOVERDUEDATE: { type: Date },
  CONVERTED: { type: Number },
  MBHAGREEMENTSERNO: { type: Number },
  MBHAGREEMENTEXPIRYDATE: { type: Date },
  TOTALCREDITSBYDUEDATE: { type: Number },
  RECALCTOTALCREDITS: { type: Number },
  RECALCTOTALCREDITSBYDUEDATE: { type: Number },
  RECALCPAIDINFULLBALANCE: { type: Number },
});

module.exports = mongoose.model("cStatements", cStatementsModel);
