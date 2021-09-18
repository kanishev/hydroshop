const { Schema, model } = require("mongoose");

const cart = new Schema({
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
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  info: {
    type: String,
    required: true,
  },
});

module.exports = model("Cart", cart);
