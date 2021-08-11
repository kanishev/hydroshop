const { Schema, model } = require("mongoose");

const product = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  img: String,
  rate: {
    type: Number,
    required: false,
  },
  brand: {
    type: String,
    required: true,
  },
  info: {
    type: String,
    required: true,
  },
});

module.exports = model("Product", product);
