module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    res.json({ message: {
      value: "Сперва необходимо залогиниться под админом",
      type: "error"
    } });
    return res.redirect("/auth");
  }

  if (req.session.user.email === "admin@mail.ru") {
    return next();
  }

  return res.redirect("/auth");
};
