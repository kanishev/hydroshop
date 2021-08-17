const path = require("path");
module.exports = async function (req, res, next) {
  console.log("HELLO ERROR MDW");
  // res.status(404).sendFile(path.join(__dirname, "../views", "404.html"));
};
