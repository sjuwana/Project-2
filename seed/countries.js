const db = require("../db");
const Country = require("../models/countries");
const Language = require("../models/language");

const main = async () => {
  const german = await Language.find({ language: "german" });
  const chinese = await Language.find({ language: "chinese" });
  const indonesian = await Language.find({ language: "indonesian" });
  const hindi = await Language.find({ language: "hindi" });
  const thai = await Language.find({ language: "thai" });

  const countries = [
    { country_name: "Austria", capital: "Vienna", language: german[0]._id },
    { country_name: "China", capital: "Beijing", language: chinese[0]._id },
    {
      country_name: "Indonesia",
      capital: "Jakarta",
      language: indonesian[0]._id,
    },
    { country_name: "India", capital: "New Delhi", language: hindi[0]._id },
    { country_name: "Thailand", capital: "Bangkok", language: thai[0]._id },
  ];
  await Country.insertMany(countries);
  console.log("Created countries!");
};

const run = async () => {
  await main();
  db.close();
};
run();
