const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Ingredient = new Schema(
  {
    ingredient: { type: String, require: true },
    preptime: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("ingredients", Ingredient);
