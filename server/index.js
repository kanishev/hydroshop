const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const cors = require("cors");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);

const varMdv = require("./middleware/vars");
const adminMdw = require("./middleware/admin");
const authMdw = require("./middleware/auth");
const userMdw = require("./middleware/user");

const cartRoutes = require("./routes/cart");
const adminRoutes = require("./routes/admin");
const productsRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const authRoutes = require("./routes/auth");

const MONGODB_URI =
  "mongodb+srv://hydroshop:wdTmyhL0NY7MzTc3@cluster0.t8huk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const app = express();

const store = new MongoStore({
  collection: "sessions",
  uri: MONGODB_URI,
});

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: false,
    store,
  })
);

// app.get("/", async (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });

app.use(flash());

app.use(userMdw);
app.use(varMdv);

app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.use("/cart", cartRoutes);
app.use("/admin", adminMdw, adminRoutes);
app.use("/products", productsRoutes);
app.use("/order", authMdw, orderRoutes);
app.use("/auth", authRoutes);

app.get("/auth", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "auth.html"));
});

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await mongoose.connect(MONGODB_URI, {
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
