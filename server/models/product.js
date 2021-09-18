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
    required: false,
  },
  sale: {
    type: Boolean, //Boolean
    default: false,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  available: {
    type: Boolean, //Boolean
    default: false,
  },
  isFavour: {
    type: Boolean,
    default: false
  },
  category:{
    type: String,
    default: 'product'
  },
  model: {
    type: String,
    default: 'Модель 1'
  },
  country: {
    type: String,
    default: 'США',
  },
  speed: {
    type: Number,
    default: 60
  },
  engine: {
    type: Number,
    default: 90
  },
  engine_hp: {
    type: Number,
    default: 20
  },
  info: {
    type: Object,
    default: Object,
  },
});

product.method("toClient", function () {
  const product = this.toObject();

  product.id = product._id;
  delete product._id;

  return product;
});

module.exports = model("Product", product);
