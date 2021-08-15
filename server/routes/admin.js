const { Router } = require("express");
const path = require("path");
const Product = require("../models/product");
const router = Router();

router.get("/", (req, res) => {
  console.log("ADMIN");
  res.sendFile(path.join(__dirname, "../views", "admin.html"));
});

router.post("/create", async (req, res) => {
  console.log(req.user);
  const { title, price, img, rate, brand, info } = req.body;
  const product = new Product({
    title,
    price,
    img,
    rate,
    brand,
    info,
    userId: req.user,
  });

  try {
    await product.save();
    res.json(product);
  } catch (e) {
    console.log(e);
  }
});

router.post("/edit", async (req, res) => {
  try {
    const { id } = req.body;
    delete req.body.id;

    await Product.findByIdAndUpdate(id, req.body);
    res.json({ message: "UPDATED" });
  } catch (e) {
    console.log(e);
  }
});

router.delete("/delete", async (req, res) => {
  try {
    await Product.deleteOne({
      _id: req.body.id,
    });

    res.json({ message: "DELETED" });
  } catch (e) {
    console.log(e);
  }
});

router.post("/image", async (req, res) => {
  console.log(req.file);
  res.json({ message: "Изображение обновлено" });
});

module.exports = router;
