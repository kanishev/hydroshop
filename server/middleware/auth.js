module.exports = function (req, res, next) {
  console.log("11");
  if (!req.session.isAuthenticated) {
    res.json({ message: "Сперва необходимо залогиниться" });
    return res.redirect("/auth");
  }
  next();
};
