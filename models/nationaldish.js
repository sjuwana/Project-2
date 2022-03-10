const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Recipe = new Schema(
  {
    dish_name: { type: String, require: true },
    ingredient: { type: Schema.Types.ObjectId, ref: "ingredients" },
    country_origin: { type: Schema.Types.ObjectId, ref: "countries" },
    // capital: { type: Schema.Types.ObjectId, ref: "Country" },
    // preptime: { type: Schema.Types.ObjectId, ref: "ingredients" },
    // language: { type: Schema.Types.ObjectId, ref: "languages" },
    preparation: { type: String, require: true },
    image: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("recipes", Recipe);
