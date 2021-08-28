module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    res.json({ message: "Сперва необходимо залогиниться под админом" });
    return res.redirect("/auth");
  }

  if (req.session.user.email === "admin@mail.ru") {
    return next();
  }

  return res.redirect("/auth");
};
