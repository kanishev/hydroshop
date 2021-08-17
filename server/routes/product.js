const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  console.log(products);
  return res.json(products);
});

router.get("/:id", async (req, res) => {
  const course = await Course.findById(req.params.id);
  return res.json(course);
});

module.exports = router;
