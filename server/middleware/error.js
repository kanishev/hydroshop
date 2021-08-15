const path = require("path");
module.exports = async function (req, res, next) {
  res.status(404).sendFile(path.join(__dirname, "../views", "404.html"));
};
