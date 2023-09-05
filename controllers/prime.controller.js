const { cStatementLink } = require("../models");
const { faker } = require("@faker-js/faker");
const { letterAndNumberRandomizer } = require("../helpers");

const twoNumbers = [1, 2];

const cStatementPopulator = async () => {
  const cStatement = new cStatementLink({
    INSTITUTION_ID: faker.string.numeric(5),
    STATEMENTSERNO: faker.string.numeric(10),
    PARTITIONKEY: faker.string.numeric(10),
    TRXNSERNO: faker.string.numeric(10),
    TRXNPARTITIONKEY: faker.string.numeric(10),
    BALSTMTSERNO: faker.string.numeric(10),
    BALSTMTPARTITIONKEY: faker.string.numeric(10),
    LINKTYPE: letterAndNumberRandomizer(["B", "N"]),
    CARDSERNO: faker.string.numeric(10),
    SUMMARYINDICATOR: letterAndNumberRandomizer(twoNumbers),
    FINANCIALINDICATOR: letterAndNumberRandomizer(twoNumbers),
    CONVERTED: letterAndNumberRandomizer(twoNumbers),
  });

  const newStatement = await cStatement.save();
  return newStatement;
};

exports.populatePrimeTables = async (req, res, next) => {
  try {
    cStatementPopulator();
    return res.json({ data: true });
  } catch (err) {
    next(err);
  }
};

exports.generateMongooseModel = async (req, res, next) => {
  const data = `Name	Nulls	Type
  INSTITUTION_ID	N	NUMBER(5)
  SERNO	N	NUMBER(10)
  `;

  console.log();
};
