const { client } = require("../startup/db");

const collections = {
  cardx: "SBC.EVENT.PRIME.BIAN.CARDX_CARDDETAILS",
  ctransactions: "SBC.EVENT.PRIME.BIAN.CTRANSACTIONS_CARDTRANSACTIONS",
  products: "SBC.EVENT.PRIME.BIAN.PRODUCTS_PRODUCTDEFINITIONSCARDANDMERCHANT",
  cextensions: "SBC.EVENT.PRIME.BIAN.CEXTENSION_EXTENSIONS",
  cardstatus: "SBC.EVENT.PRIME.BIAN.CARDSTATUSX_CARDSTATUSTABLE",
  caccounts: "SBC.EVENT.PRIME.BIAN.CACCOUNTS_CARDACCOUNTS",
};

const runPipelineOnCollection = async (client, collectionName, pipeline) => {
  const db = client.db("BIAN_PRIME");
  const collection = db.collection(collectionName);

  return collection.aggregate(pipeline);
};

const runMultipleSerno = async (serno, collection) => {
  const pipeline = [
    {
      $match: {
        uniqueSerialNumber: serno,
      },
    },
    {
      $lookup: {
        from: collections.caccounts,
        localField: "uniqueSerialNumber",
        foreignField: "uniqueSerialNumber",
        as: "CACCOUNTS",
      },
    },
    { $unwind: "$CACCOUNTS" },
    {
      $lookup: {
        from: collections.cextensions,
        let: {
          uniqueSerialNumber: "$uniqueSerialNumber",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$tableRowSerialNumber", "$$uniqueSerialNumber"] },
                  { $eq: ["$extensionFieldNumber", 22041] },
                  { $eq: ["$tableIndicator", "C"] },
                ],
              },
            },
          },
        ],
        as: "CHANNEL_CODE",
      },
    },

    {
      $lookup: {
        from: collections.cextensions,
        let: {
          uniqueSerialNumber: "$uniqueSerialNumber",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$tableRowSerialNumber", "$$uniqueSerialNumber"] },
                  { $eq: ["$extensionFieldNumber", 22042] },
                  { $eq: ["$tableIndicator", "C"] },
                ],
              },
            },
          },
        ],
        as: "SALES_ID",
      },
    },
    {
      $lookup: {
        from: collections.cardstatus,
        let: {
          stgeneral: "$STGENERAL",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ["$CODE", "$$stgeneral"] }],
              },
            },
          },
        ],
        as: "CARDSTATUS",
      },
    },
    {
      $lookup: {
        from: collections.products,
        localField: "productName",
        foreignField: "uniqueSerialNumber",
        as: "PRODUCTS",
      },
    },
    {
      $lookup: {
        from: collections.ctransactions,
        localField: "uniqueSerialNumber",
        foreignField: "cardSerialNumber",
        as: "CTRANSACTIONS",
      },
    },
    { $limit: 1 },
    {
      $set: {
        creditLimit: {
          $toDouble: "$CACCOUNTS.creditLimit",
        },
        currentBalance: {
          $toDouble: "$CACCOUNTS.currentBalance",
        },
        installmentBalance: {
          $toDouble: "$CACCOUNTS.installmentBalance",
        },
      },
    },
    {
      $project: {
        _id: 0,
        // CARDX
        cardNum: "$creditCardNumber",
        membershipDate: "$accountCreationDate",
        ownership: "$primaryCardIndicator",
        expiryDate: 1,
        cardType: "MASTERCARD",
        chName: "SAMPLE LOREM NAME",
        // CARD STATUS
        status: {
          $concat: [
            "$generalStatusCode",
            " - ",
            { $arrayElemAt: ["$CARDSTATUS.productDescription", 0] },
          ],
        },
        // PRODUCTS
        productSerno: {
          $arrayElemAt: ["$PRODUCTS.uniqueSerialNumber", 0],
        },
        // CACCOUNTS
        acctNumber: "$CACCOUNTS.accountNumber",
        exceedLimit: "$creditLimit",
        outstdgBal: "$currentBalance",
        currency: {
          $cond: {
            if: { $eq: ["$creditLimitCurrencyCode", "840"] },
            then: "USD",
            else: "PHP",
          },
        },
        // bbn: {},
        // CEXTENSIONS
        channelCode: {
          $ifNull: [{ $arrayElemAt: ["$CHANNEL_CODE.VALUE", 0] }, null],
        },
        salesId: { $ifNull: [{ $arrayElemAt: ["$SALES_ID.VALUE", 0] }, null] },

        availableCreditLimit: {
          $switch: {
            branches: [
              // CASE WHEN (balance > 0  AND installmentbalance = 0)  THEN (creditlimit + ABS(balance)) -- balance overpayment and 0 instalment balance
              {
                case: {
                  $and: [
                    { $gt: ["$currentBalance", 0] },
                    {
                      $eq: ["$installmentBalance", 0],
                    },
                  ],
                },
                then: {
                  $add: ["$creditLimit", { $abs: "$currentBalance" }],
                },
              },
              // WHEN (balance > 0  AND installmentbalance < 0)  THEN (creditlimit - (ABS(balance) + ABS(installmentbalance))) -- balance overpayment and with instalment balance
              {
                case: {
                  $and: [
                    {
                      $gt: ["$currentBalance", 0],
                    },
                    {
                      $lt: ["$installmentBalance", 0],
                    },
                  ],
                },
                then: {
                  $subtract: [
                    "$creditLimit",
                    {
                      $add: [
                        { $abs: "$currentBalance" },
                        { $abs: "$installmentBalance" },
                      ],
                    },
                  ],
                },
              },
              //      WHEN (balance <= 0 AND installmentbalance <= 0) THEN (creditlimit - (ABS(balance) + ABS(installmentbalance))) -- with balance and with instalment balance
              {
                case: {
                  $and: [
                    {
                      $lte: ["$currentBalance", 0],
                    },
                    {
                      $lte: ["$installmentBalance", 0],
                    },
                  ],
                },
                then: {
                  $subtract: [
                    "$creditLimit",
                    {
                      $add: [
                        { $abs: "$currentBalance" },
                        { $abs: "$installmentBalance" },
                      ],
                    },
                  ],
                },
              },
            ],
            default: {
              $subtract: [
                "$creditLimit",
                {
                  $add: [
                    { $abs: "$currentBalance" },
                    { $abs: "$installmentBalance" },
                  ],
                },
              ],
            },
          },
        },
      },
    },
    {
      $merge: {
        into: {
          coll: "merge",
        },
        // on: "acctNumber",
      },
    },
  ];

  const data = await collection.aggregate(pipeline).toArray();
  return data;
};

exports.postFunction = async (req, res, next) => {
  const db = client.db("BIAN_PRIME");
  const collection = db.collection(collections.cardx);

  const dataToFind = await collection.find({}).limit(15).toArray();

  const sernos = dataToFind.map((doc) => {
    return doc.uniqueSerialNumber;
  });

  let output = [];
  for (let i of sernos) {
    const data = await runMultipleSerno(i, collection);
    output.push(data);
  }

  return res.status(200).json(output);
};

exports.runSpecificPipeline = async (req, res, next) => {
  const db = client.db("BIAN_PRIME");
  const pipeline = [];

  const data = await runPipelineOnCollection(db, collections, pipeline);

  return res.json(data);
};
