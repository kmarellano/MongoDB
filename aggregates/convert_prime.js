const cardSerno = 3165121048;

const channelCode = [
  {
    $match: {
      TABINDICATOR: "C",
      FIELDNO: 38978,
      ROWSERNO: cardSerno,
    },
  },
  {
    $project: { CHANNEL_CODE: "$VALUE", _id: 0 },
  },
];

const salesId = [
  {
    $match: {
      TABINDICATOR: "C",
      FIELDNO: 38979,
      ROWSERNO: cardSerno,
    },
  },
  {
    $project: { SALES_ID: "$VALUE", _id: 0 },
  },
];

const maxDateFromTables = [{}];

const pipelines = [...channelCode, ...salesId];

console.log(...channelCode);
// db.Cextension.aggregate(channelCode);
