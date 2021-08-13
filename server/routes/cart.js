const { Router } = require("express");
const Cart = require("../models/cart");
const Product = require("../models/product");
const router = Router();

function mapCartProducts(cart) {
  return cart.items.map((p) => ({
    ...p.productId._doc,
    id: p.productId.id,
    count: p.count,
  }));
}

// function computePrice(products) {
//   return products.reduce((acc, el) => {
//     return acc+= el.price * el.count;
//   }, 0)
// }

router.post("/add", async (req, res) => {
  const product = await Product.findById(req.body.id);
  console.log(req.user);
  await req.user.addToCart(product);
  res.json({ message: "Создано" });
});

router.get("/", async (req, res) => {
  const user = await req.user.populate("cart.items.productId").execPopulate();
  const products = mapCartProducts(user.cart);
  res.json(products);
});

router.delete("/remove/:id", async (req, res) => {
  await req.user.removeFromCart(req.params.id);
  const user = await req.user.populate("cart.items.productId").execPopulate();
  const products = mapCartProducts(user.cart);

  // const cart = {
  //   products,
  //   price: computePrice(products),
  // };

  console.log(user);

  res.json({ message: "Delete one" });
});

module.exports = router;
