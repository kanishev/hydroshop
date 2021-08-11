const { Router } = require("express");
const Product = require("../models/product");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Страница админа" });
});

router.post("/", (req, res) => {
  console.log("REQQQQ", req.body);
});

router.get("/products", async (req, res) => {
  // const courses = await Course.getAll();
  res.json({ message: "Hello" });
});

router.post("/product", async (req, res) => {
  console.log("REQ", req.body);
  const { title, price, img, rate, brand, info } = req.body;
  const product = new Product({ title, price, img, rate, brand, info });

  try {
    await product.save();
    res.json(product);
  } catch (e) {
    console.log(e);
  }
});

router.get("/product/:id", async (req, res) => {
  const course = await Course.getById(req.params.id);
  res.json(course);
});

router.post("/product/edit", async (req, res) => {
  await Course.update(req.body);
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
