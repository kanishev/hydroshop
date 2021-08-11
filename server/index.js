const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const cartRoutes = require("./routes/cart");
const adminRoutes = require("./routes/admin");

app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.json());
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

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    const url =
      "mongodb+srv://hydroshop:Uw5T4PmN52W!@pj@cluster0.t8huk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    await mongoose.connect(url, { useNewUrlParser: true });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();
