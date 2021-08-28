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
    const { id } = req.body;
    delete req.body.id;

    await Product.findByIdAndUpdate(id, req.body);
    res.json({ message: "UPDATED" });
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
  // return res.json(req.file);
  console.log("IMG", req.file)
  return res.json(req.file);
});

// router.get("/image", async (req, res) => {
//   console.log('SEND')
//   res.set({'Content-Type': 'image/jpg'});
//   res.sendFile(path.join(__dirname, '../images/1629053766056-unnamed.jpg'));
// });

module.exports = router;
