const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const User = require("./models/user");

const cartRoutes = require("./routes/cart");
const adminRoutes = require("./routes/admin");
const productsRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");

app.use(cors());
app.use(async (req, res, next) => {
  try {
    const user = await User.findById("6115662633e73f231030d871");
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
  }
});

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// app.get("/", async (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

app.use("/cart", cartRoutes);
app.use("/admin", adminRoutes);
app.use("/products", productsRoutes);
app.use("/order", orderRoutes);

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url =
      "mongodb+srv://hydroshop:Uw5T4PmN52W!@pj@cluster0.t8huk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    const candidate = await User.findOne();
    if (!candidate) {
      const user = new User({
        email: "test@mail.ru",
        name: "example",
        password: "111",
        cart: { items: [] },
      });

      await user.save();
    }

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
