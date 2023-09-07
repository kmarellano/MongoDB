const cAccountRouting = require("./caccountrouting.model");
const cAccounts = require("./caccounts.model");
const cardStatusX = require("./cardstatusx.model");
const cardX = require("./cardx.model");
const cExtension = require("./cextension.model");
const cTransactions = require("./ctransactions.model");
const products = require("./products.model");
const currencies = require("./currencies.model");
const people = require("./people.model");
const applog = require("./applog.model");

// const cStatements = require("./cstatements.model");
// const cardEmbossing = require("./cardembossing.model");
// const countries = require("./countries.model");
// const cStatementLinks = require("./cstatementlinks.model");
// const products = require("./products.model");
// const riskDomains = require("./riskdomains.model");
// const trxnTypes = require("./trxntypes.model");

module.exports = {
  cAccountRouting,
  cAccounts,
  cardStatusX,
  cardX,
  cTransactions,
  cExtension,
  products,
  currencies,
  people,
  applog,
  // cardEmbossing,
  // countries,
  // cStatementLinks,
  // cStatements,
  // products,
  // riskDomains,
  // trxnTypes,
};
