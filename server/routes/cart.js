const { Router } = require("express");
const Cart = require("../models/cart");
const Course = require("../models/product");
const router = Router();

router.post("/add", async (req, res) => {
  const course = await Course.getById(req.body.id);
  await Cart.add(course);
  res.json({ message: "Создано" });
});

router.get("/", async (req, res) => {
  const cart = await Cart.fetch();
  res.json({ message: "Корзина" });
});

router.delete("/remove/:id", async (req, res) => {
  const cart = Cart.remove(req.params.id);
  res.json({ message: "Delete one" }, cart);
});

module.exports = router;
