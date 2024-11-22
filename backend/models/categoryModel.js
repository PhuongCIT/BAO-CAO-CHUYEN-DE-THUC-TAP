const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    title: String,
    image: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;
