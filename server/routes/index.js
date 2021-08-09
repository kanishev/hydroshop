const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const brandRouter = require("./brandRouter");
const productRouter = require("./productRouter");
const typeRouter = require("./typeRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);

module.exports = router;
