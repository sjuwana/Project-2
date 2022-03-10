const db = require("../db");
const Language = require("../models/language");

const main = async () => {
  const languages = [
    { language: "german" },
    { language: "chinese" },
    { language: "hindi" },
    { language: "indonesian" },
    { language: "thai" },
  ];
  await Language.insertMany(languages);
  console.log("Created languages!");
};

const run = async () => {
  await main();
  db.close();
};
run();
