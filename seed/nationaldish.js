const db = require("../db");
const Recipe = require("../models/nationaldish");
// const Language = require("../models/language");
const Country = require("../models/countries");
const Ingredient = require("../models/ingredient");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  // const german = await Language.find({ language: "german" });
  const austria = await Country.find({ country_name: "Austria" });
  const schnitzelIngredient = await Ingredient.find({
    preptime: " 55 minutes ",
  });

  // const chinese = await Language.find({ language: "chinese" });
  const china = await Country.find({ country_name: "China" });
  const duckIngredient = await Ingredient.find({
    ingredient: " duck, soy sauce, five-spices ",
  });

  // const indonesian = await Language.find({ language: "indonesian" });
  const indonesia = await Country.find({ country_name: "Indonesia" });
  const rendangIngredient = await Ingredient.find({
    ingredient: " beef, coconut milk, curry spices ",
  });

  // const hindi = await Language.find({ language: "hindi" });
  const india = await Country.find({ country_name: "India" });
  const biryaniIngredient = await Ingredient.find({
    ingredient: " chicken, rice, onions, spices ",
  });

  // const thai = await Language.find({ language: "thai" });
  const thailand = await Country.find({ country_name: "Thailand" });
  const padthaiIngredient = await Ingredient.find({
    ingredient: " rice noodles, egg, tofu, palm sugar ",
  });

  const dishes = [
    {
      dish_name: "Wiener Schnitzel",
      ingredient: schnitzelIngredient[0]._id,
      country_origin: austria[0]._id,
      // capital: country[0].capital,
      // preptime: schnitzelIngredient[0]._id,
      // language: german[0]._id,
      preparation:
        "The dish is prepared from veal slices, butterfly cut, about 4 mm in thickness and lightly pounded flat, slightly salted, and rolled in flour, whipped eggs, and bread crumbs. The bread crumbs must not be pressed into the meat, so that they stay dry and can be souffléd. Finally the Schnitzel is fried in a good proportion of lard or clarified butter at  temperature of 160 to 170 °C (320 to 340 °F) until it is golden yellow. The Schnitzel must swim in the fat, otherwise it will not cook evenly: the fat cools too much and intrudes into the bread crumbs, moistening them. During the frying the Schnitzel is repeatedly slightly tossed around the pan. Also during the frying, fat can be scooped from the pan with a spoon and poured onto the meat. The Schnitzel is cooked after it turns golden yellow or brown.",
      image:
        "https://en.wikipedia.org/wiki/National_dish#/media/File:Wiener-Schnitzel02.jpg",
    },

    {
      dish_name: "Peking Duck",
      ingredient: duckIngredient[0]._id,
      country_origin: china[0]._id,
      // capital: country[0].capital,
      // preptime: duckIngredient[0]._id,
      // language: chinese[0]._id,
      preparation:
        "Fattened ducks are killed, plucked, eviscerated and rinsed thoroughly with water.[citation needed] Air is pumped under the skin through the neck cavity to separate the skin from the fat. The duck is then blanched in boiling hot water for two to three minutes before it is hung up to dry. This tightens the skin. While it is hung, the duck is glazed with a layer of runny syrup, and the inside is rinsed once more with water. A second layer of glaze/marinade of soy sauce, five-spice powder, and more maltose is then applied inside and out, and the duck is left to stand for 24 hours in a cool, dry place (or a refrigerator). It is then roasted in an oven until the skin turns shiny brown.",
      image: "https://en.wikipedia.org/wiki/File:Peking_Duck,_2014_(02).jpg",
    },

    {
      dish_name: "Rendang",
      ingredient: rendangIngredient[0]._id,
      country_origin: indonesia[0]._id,
      // capital: country[0].capital,
      // preptime: rendangIngredient[0]._id,
      // language: indonesian[0]._id,
      preparation:
        "Rendang is most often described as meat slow-cooked in coconut milk and spices until it becomes tender. If cooked properly, dry rendang can last for as long as four weeks. Prior to refrigeration technology, this style of cooking enabled preservation of the large amount of meat. The cooking technique flourished because of its role in preserving meat in a tropical climate. Its durability is one of the reason that today, prepackaged rendang are sent as the food aid relieve for natural disaster survivors in Indonesia.The cut of beef suitable for rendang is lean meat of the rear leg of the cattle; i.e. topside or round beef, which is considered perfect for slow cooking.",
      image:
        "https://en.wikipedia.org/wiki/Rendang#/media/File:Rendang_daging_sapi_asli_Padang.JPG",
    },

    {
      dish_name: "Biryani",
      ingredient: biryaniIngredient[0]._id,
      country_origin: india[0]._id,
      // capital: country[0].capital,
      // preptime: biryaniIngredient[0]._id,
      // language: hindi[0]._id,
      preparation:
        "Layers of raw marinated meat are alternated with layers with wet, pre-soaked, raw rice, and cooked together by baking or medium-to-low direct heat. Cooking occurs by a process of steaming from the ingredients' own moisture so that steam cannot escape. A yoghurt-based marinade at the bottom of the cooking pot provides additional flavor and moisture. Potatoes often comprise the bottom-most layer with their natural moisture content. The meat will brown well with less risk of getting burned accidentally. The lid is not opened until the dish is ready to serve.",
      image:
        "https://en.wikipedia.org/wiki/Biryani#/media/File:%22Hyderabadi_Dum_Biryani%22.jpg",
    },

    {
      dish_name: "Pad Thai",
      ingredient: padthaiIngredient[0]._id,
      country_origin: thailand[0]._id,
      // capital: country[0].capital,
      // preptime: padthaiIngredient[0]._id,
      // language: thai[0]._id,
      preparation:
        "Pad thai is made with rehydrated dried rice noodles with some tapioca flour mixed in, which are stir fried with eggs and chopped firm tofu, flavored with tamarind juice, fish sauce, dried shrimp, garlic or shallots, red chili pepper and palm sugar, and served with lime wedges and often chopped roasted peanuts. It may contain other vegetables like bean sprouts, garlic chives, pickled radishes or turnips, and raw banana flowers. It may also contain fresh shrimp, crab, squid, chicken or other fish or meat.",
      image:
        "https://en.wikipedia.org/wiki/Pad_thai#/media/File:Phat_Thai_kung_Chang_Khien_street_stall.jpg",
    },
  ];

  await Recipe.insertMany(dishes);
  console.log("Created national dishes!");
};
const run = async () => {
  await main();
  db.close();
};
run();
