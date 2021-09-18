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
  resetToken: String,
  resetTokenExp: Date,
  role: {
    type: String,
    default: 'USER'
  },
  favour: {
    items: [
        {
          productId: {
             type: Schema.Types.ObjectId,
             ref: 'Product',
             required: true
         }
        }

    ]
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
  console.log(product);
  const items = [...this.cart.items];
  const idx = items.findIndex((p) => {
    return p.productId.toString() === product.id.toString();
  });

  if (idx >= 0) {
    items[idx].count = items[idx].count + 1;
  } else {
    items.push({
      productId: product.id,
      count: 1,
    });
  }

  this.cart = { items };
  return this.save();
};

user.methods.removeFromCart = function (id, exact) {

  let items = [...this.cart.items];

  if (exact){
    items = items.filter((p) => p.productId.toString() !== id.toString());
    this.cart = { items };
    return this.save();
  }


  const idx = items.findIndex((p) => {
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

user.methods.addFavour = function(product){
  let items = [...this.favour.items]
  const idx = items.findIndex( p => p.productId.toString() == product.id.toString())
  if (idx == -1){
     items.push({
          productId: product.id
      })
  }

  this.favour = {items}
  return this.save()
}

user.methods.removeFavour = function(product){
  let items = [...this.favour.items]
  const idx = items.findIndex( c => c.productId.toString() == product.id.toString())
  if (idx >= 0){
    items = items.filter(c => c.productId.toString() !== product._id.toString())
  }
  this.favour = {items}
  return this.save()
}


module.exports = model("User", user);
