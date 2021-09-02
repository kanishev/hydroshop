module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    res.json({ message: {
      value: "Сперва необходимо залогиниться",
      type: "danger"
    } });
    return res.redirect("/auth");
  }
  next();
};
