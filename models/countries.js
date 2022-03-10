const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Country = new Schema(
  {
    country_name: { type: String, require: true },
    capital: { type: String, require: true },
    language: { type: Schema.Types.ObjectId, ref: "languages" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("countries", Country);
