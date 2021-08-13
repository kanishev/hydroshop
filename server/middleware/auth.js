module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    res.json({ message: "Сперва необходимо залогиниться" });
    return res.redirect("/auth");
  }
  next();
};
