const { Router } = require("express");
const Cart = require("../models/cart");
const User = require("../models/user")
const Product = require("../models/product");
const router = Router();

function mapCartProducts(cart) {
  return cart.items.map((p) => ({
    ...p.productId._doc,
    id: p.productId.id,
    count: p.count,
  }));
}

router.post("/add", async (req, res) => {
  const product = await Product.findById(req.body.id);
  await req.user.addToCart(product);

  const {cart} = await User.findOne({ email: req.session.user.email });

  res.json({cart, message: {
    value: 'Товар добавлен в корзину',
    type: 'success'
  }});
});

router.get("/", async (req, res) => {
  const user = await req.user.populate("cart.items.productId").execPopulate();
  const cart = mapCartProducts(user.cart);
  return res.json(cart);
});

router.post("/remove", async (req, res) => {
  await req.user.removeFromCart(req.body.id, req.body.exact);
  return res.json({ message: "Delete one" });
});

module.exports = router;
