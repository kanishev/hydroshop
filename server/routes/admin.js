const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Страница админа" });
});

router.post("/", (req, res) => {
  console.log("REQQQQ", req.body);
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

// // =>>>>>>>>>>>>>>>>>>>>>>>>>>>>> должная быть отдельная страница + id получать для обновы

// router.get("/product/:id/edit", async (req, res) => {
//   if (!req.query.allow) {
//     return res.redirect("/");
//   }

//   const course = await Course.getById(req.params.id);
//   res.json(course);
// });

module.exports = router;
