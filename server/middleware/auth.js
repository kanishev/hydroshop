module.exports = function (req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.json({ message: {
      value: "Сперва необходимо залогиниться",
      type: "danger"
    } });
  }
  next();
};
