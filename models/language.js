const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");
const Schema = mongoose.Schema;
const Language = new Schema(
  {
    language: { type: String, require: true },
    alphabet: { type: String, require: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("languages", Language);
