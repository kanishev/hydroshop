const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const helmet = require("helmet");

const varMdv = require("./middleware/vars");
const adminMdw = require("./middleware/admin");
const authMdw = require("./middleware/auth");
const userMdw = require("./middleware/user");
const errorMdw = require("./middleware/error");
const fileMdw = require("./middleware/file");

const cartRoutes = require("./routes/cart");
const adminRoutes = require("./routes/admin");
const productsRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const keys = require("./keys/index");

const app = express();

const store = new MongoStore({
  collection: "sessions",
  uri: keys.MONGODB_URI,
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use("images/", express.static(path.join(__dirname, "images")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: keys.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
  })
);

app.use(fileMdw.single("product"));
app.use(flash());
app.use(helmet());
app.use(userMdw);
app.use(varMdv);

app.get("/", (req, res) => {
  console.log("ТУТА");
});
app.use("/cart", authMdw, cartRoutes);
app.use("/admin", adminMdw, adminRoutes);
app.use("/products", productsRoutes);
app.use("/order", authMdw, orderRoutes);
app.use("/auth", authRoutes);
app.use(errorMdw);

const PORT = 3000;

async function start() {
  try {
    await mongoose.connect(keys.MONGODB_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
