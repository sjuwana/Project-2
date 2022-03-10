const db = require("../db");
const Ingredient = require("../models/ingredient");

const main = async () => {
  const ingredient = [
    {
      ingredient: " veal cutlet, bread crumbs, potatoes ",
      preptime: " 55 minutes ",
    },
    { ingredient: " duck, soy sauce, five-spices ", preptime: " 90 minutes " },
    {
      ingredient: " beef, coconut milk, curry spices ",
      preptime: " 120 minutes ",
    },
    { ingredient: " chicken, rice, onions, spices ", preptime: " 65 minutes " },
    {
      ingredient: " rice noodles, egg, tofu, palm sugar ",
      preptime: " 35 minutes ",
    },
  ];
  await Ingredient.insertMany(ingredient);
  console.log("Created ingredients!");
};

const run = async () => {
  await main();
  db.close();
};
run();
