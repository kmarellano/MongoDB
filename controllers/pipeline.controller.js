const {
  cAccountRouting,
  cAccounts,
  cardStatusX,
  cardX,
  cExtension,
  cTransactions,
  products,
  applog,
  currencies,
  people,
} = require("../models");

exports.runPipeline = async (req, res, next) => {
  const cardSerno = 3338576418;

  const data = await cardX.aggregate([
    {
      $match: {
        SERNO: cardSerno,
      },
    },
    {
      $lookup: {
        from: "peoples",
        localField: "PEOPLESERNO", // cardx
        foreignField: "SERNO", // peoples.serno
        as: "PERSON",
      },
    },
    {
      $unwind: "$PERSON",
    },
    {
      $lookup: {
        from: "products",
        localField: "PRODUCT",
        foreignField: "SERNO",
        as: "PRODUCT",
      },
    },
    {
      $unwind: "$PRODUCT",
    },
    {
      $lookup: {
        from: "caccounts",
        localField: "CACCSERNO",
        foreignField: "SERNO",
        as: "ACCOUNTS",
      },
    },
    {
      $unwind: "$ACCOUNTS",
    },
    {
      $lookup: {
        from: "cardstatusxes",
        let: {
          stgeneral: "$STGENERAL",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$CODE", "$$stgeneral"] },
                  { $eq: ["$CARD", -1] },
                  { $eq: ["$INSTITUTION_ID", 375] },
                ],
              },
            },
          },
        ],
        as: "CS",
      },
    },
    {
      $lookup: {
        from: "cextensions",
        let: {
          personSerno: "$PERSON.SERNO",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$ROWSERNO", "$$personSerno"] },
                  { $eq: ["$TABINDICATOR", "P"] },
                  { $eq: ["$FIELDNO", 8736] },
                ],
              },
            },
          },
        ],
        as: "CEXT",
      },
    },
    {
      $lookup: {
        from: "currencies",
        let: {
          accountCurrency: "$ACCOUNTS.CURRENCY",
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [{ $eq: ["$NUMCODE", "$$accountCurrency"] }],
              },
            },
          },
        ],
        as: "CURRENCY",
      },
    },
    {
      $match: {
        CURRENCY: {
          $ne: [],
        },
      },
    },

    // {
    //   $facet: {
    //     CHANNEL_CODE: [
    //       {
    //         $match: {
    //           SERNO: cardSerno,
    //         },
    //       },
    //       {
    //         $lookup: {
    //           from: "cextensions",
    //           let: { cardSerno: cardSerno },
    //           pipeline: [
    //             {
    //               $match: {
    //                 ROWSERNO: cardSerno,
    //                 FIELDNO: 48887,
    //                 TABINDICATOR: "C",
    //               },
    //             },
    //             {
    //               $project: {
    //                 _id: 0,
    //                 VALUE: 1,
    //               },
    //             },
    //           ],
    //           as: "CHANNEL_CODE",
    //         },
    //       },
    //       {
    //         $project: { _id: 0, CHANNEL_CODE: 1 },
    //       },
    //       {
    //         $addFields: {
    //           CHANNEL_CODE: { $arrayElemAt: ["$CHANNEL_CODE.VALUE", 0] },
    //         },
    //       },
    //     ],
    //     //
    //     SALES_ID: [
    //       {
    //         $match: {
    //           SERNO: cardSerno,
    //         },
    //       },
    //       {
    //         $lookup: {
    //           from: "cextensions",
    //           let: { cardSerno: cardSerno },
    //           pipeline: [
    //             {
    //               $match: {
    //                 ROWSERNO: cardSerno,
    //                 FIELDNO: 4569,
    //                 TABINDICATOR: "C",
    //               },
    //             },
    //             {
    //               $project: {
    //                 _id: 0,
    //                 VALUE: 1,
    //               },
    //             },
    //           ],
    //           as: "SALES_ID",
    //         },
    //       },
    //       {
    //         $project: { _id: 0, SALES_ID: 1 },
    //       },
    //       {
    //         $addFields: {
    //           SALES_ID: { $arrayElemAt: ["$SALES_ID.VALUE", 0] },
    //         },
    //       },
    //     ],

    //     POSTDATE: [
    //       {
    //         $lookup: {
    //           from: "ctransactions",
    //           pipeline: [
    //             {
    //               $match: {
    //                 CARDSERNO: cardSerno,
    //               },
    //             },
    //             {
    //               $project: {
    //                 _id: 0,
    //                 VALUE: "$POSTDATE",
    //               },
    //             },
    //           ],
    //           as: "POSTDATE",
    //         },
    //       },
    //       {
    //         $addFields: {
    //           POSTDATE: { $arrayElemAt: ["$POSTDATE.VALUE", 0] },
    //         },
    //       },
    //       {
    //         $project: {
    //           _id: 0,
    //           POSTDATE: 1,
    //         },
    //       },
    //     ],

    //     DATETIMESTAMP: [
    //       {
    //         $lookup: {
    //           from: "applogs",
    //           pipeline: [
    //             {
    //               $match: {
    //                 ROWSERNO: cardSerno,
    //                 TABNAME: "cardx",
    //                 ACTIONTYPE: { $in: ["I", "U"] },
    //               },
    //             },
    //             {
    //               $project: {
    //                 _id: 0,
    //                 VALUE: "$DATETIMESTAMP",
    //               },
    //             },
    //           ],
    //           as: "DATETIMESTAMP",
    //         },
    //       },
    //       {
    //         $project: {
    //           _id: 0,
    //           DATETIMESTAMP: 1,
    //         },
    //       },
    //       {
    //         $addFields: {
    //           DATETIMESTAMP: { $max: "$DATETIMESTAMP.VALUE" },
    //         },
    //       },
    //     ],

    //     ACTION_DATE: [
    //       {
    //         $lookup: {
    //           from: "cextensions",
    //           pipeline: [
    //             {
    //               $match: {
    //                 ROWSERNO: cardSerno, // PEOPLE SERNO OR CARD PEOPLE SERNO
    //                 TABINDICATOR: "P",
    //                 FIELDNO: 8736,
    //               },
    //             },
    //             {
    //               $project: {
    //                 _id: 0,
    //                 VALUE: "$ACTIONDATE",
    //               },
    //             },
    //           ],
    //           as: "ACTIONDATE",
    //         },
    //       },
    //       {
    //         $addFields: {
    //           ACTIONDATE: { $max: "$ACTIONDATE.VALUE" },
    //         },
    //       },
    //       {
    //         $project: {
    //           _id: 0,
    //           ACTIONDATE: 1,
    //         },
    //       },
    //     ],
    //   },
    // },

    // {
    //   $addFields: {
    //     CHANNEL_CODE: { $arrayElemAt: ["$CHANNEL_CODE.CHANNEL_CODE", 0] },
    //     SALES_ID: { $arrayElemAt: ["$SALES_ID.SALES_ID", 0] },
    //     LAST_UPDATE: {
    //       $max: [
    //         "$POSTDATE.POSTDATE",
    //         "$DATETIMESTAMP.DATETIMESTAMP",
    //         "$ACTION_DATE.ACTION_DATE",
    //       ],
    //     },
    //   },
    // },
  ]);

  return res.json(data);
};
