const { Router } = require("express");
const path = require("path");
const Product = require("../models/product");
const router = Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views", "admin.html"));
});

router.post("/create", async (req, res) => {
  const { title, price, img, rate, brand, info, sale, available } = req.body;
  const product = new Product({
    title,
    price,
    img,
    rate,
    brand,
    info,
    sale,
    available,
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

    const product = await  Product.findById(req.body.id)

    const body = req.body;

    for (let key in body){
      if (!body[key]){
        body[key] = product[key]
      }
    }

    await Product.findByIdAndUpdate(req.body.id, Object.assign(product, body));

    return res.json({ message: {
      value: 'Товар успешно изменен',
      type: 'success'
    } });
  } catch (e) {
    console.log(e);
  }
});

router.post("/remove", async (req, res) => {
  try {
    await Product.deleteOne({
      _id: req.body.id,
    });

    res.json({ message: "DELETED" });
  } catch (e) {
    console.log(e);
  }
});

router.post("/image", async (req, res, next) => {
  return res.json(req.file);
});

module.exports = router;
