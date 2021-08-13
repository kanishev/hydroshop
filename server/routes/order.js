const { Router } = require("express");
const Order = require("../models/order");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({ "user.userId": req.user._id }).populate(
      "user.userID"
    );

    const result = orders.map((o) => ({
      ...o._doc,
      price: o.products.reduce((acc, p) => {
        return (acc += +p.count * +p.product.price);
      }, 0),
    }));

    res.json(result);
  } catch (e) {
    console.log(e);
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await req.user.populate("cart.items.productId").execPopulate();

    const products = user.cart.items.map((p) => ({
      count: p.count,
      product: { ...p.productId._doc },
    }));

    if (products.length == 0) {
      return res.json({ message: "NO PRODUCT" });
    }

    const order = new Order({
      user: {
        name: req.user.name,
        userId: req.user,
      },
      products,
    });

    console.log(order);

    await order.save();
    await req.user.clearCart();
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
