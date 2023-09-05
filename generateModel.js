const fs = require("fs/promises");

const itemType = (type) => {
  const regexNumber = /Number/gi;
  const regexChar = /CHAR|NUMBER/gi;
  const regexDate = /DATE/gi;

  if (regexNumber.test(type)) {
    return "Number";
  } else if (regexChar.test(type)) {
    return "String";
  } else if (regexDate.test(type)) {
    return "Date";
  }
  return "String";
};

const generateMongooseModel = async () => {
  const data = `INSTITUTION_ID	N	NUMBER(5)
  SERNO	N	NUMBER(10)
  TABINDICATOR	N	CHAR(1 BYTE)
  ROWSERNO	N	NUMBER(10)
  ADDRESSSERNO	N	NUMBER(10)
  ADDRESSTYPE	Y	CHAR(5 BYTE)
  FROMDATE	Y	DATE
  UNTILDATE	Y	DATE
  ADDRESSLINKTYPE1SOURCESERNO	Y	NUMBER(10)
  ADDRESSLINKTYPE2SOURCESERNO	Y	NUMBER(10)
  ADDRESSLINKTYPE3SOURCESERNO	Y	NUMBER(10)
  ADDRESSLINKTYPE4SOURCESERNO	Y	NUMBER(10)
  ADDRESSLINKTYPE5SOURCESERNO	Y	NUMBER(10)
  LOGACTION	Y	CHAR(11)
  CONVERTED	Y	NUMBER(2)
  `;

  const regex = new RegExp("\t|\n");
  const splits = data.trim().split(regex);
  const splittedArray = splits.map((cell) => cell.trim());
  const groupSize = 3;
  const groupedArray = [];

  for (let i = 0; i < splittedArray.length; i += groupSize) {
    const group = splittedArray.slice(i, i + groupSize);
    groupedArray.push(group);
  }

  const finalModel = {};

  for (const item of groupedArray) {
    const [key, isRequired, type] = item;

    finalModel[key] = {
      type: itemType(type),
    };

    isRequired === "N" ? (finalModel[key].required = true) : null;
  }

  await fs.writeFile(
    __dirname + "/model.txt",
    JSON.stringify(finalModel).replace(/"/g, "")
  );

  return finalModel;
};

generateMongooseModel();
