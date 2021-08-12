const { Schema, model } = require("mongoose");

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    items: [
      {
        count: {
          type: Number,
          required: true,
          default: 1,
        },
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
  },
});

user.methods.addToCart = function (product) {
  const items = [...this.cart.items];
  const idx = items.findIndex((p) => {
    return p.productId.toString() === product._id.toString();
  });

  if (idx >= 0) {
    items[idx].count = items[idx].count + 1;
  } else {
    items.push({
      productId: product._id,
      count: 1,
    });
  }

  this.cart = { items };
  return this.save();
};

user.methods.removeFromCart = function (id) {
  let items = [...this.cart.items];

  const idx = items.findIndex((p) => {
    console.log(p);
    console.log(id);
    return p.productId.toString() === id.toString();
  });

  if (items[idx].count === 1) {
    items = items.filter((p) => p.productId.toString() !== id.toString());
  } else {
    items[idx].count--;
  }

  this.cart = { items };
  return this.save();
};

user.methods.clearCart = function (id) {
  this.cart = { items: [] };
  return this.save();
};

module.exports = model("User", user);
