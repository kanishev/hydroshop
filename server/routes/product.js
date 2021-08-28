const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.get("/", async (req, res) => {
  const products = await Product.find();
  return res.json(products);
});

router.get("/:id", async (req, res, next) => {
  if(req.params.id === 'undefined'){
    return next()
  } else {
    const product = await Product.findById(req.params.id);
    return res.json(product)
  }

});

module.exports = router;
