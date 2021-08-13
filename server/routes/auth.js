const { Router } = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const router = Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      const areSame = await bcrypt.compare(password, candidate.password);
      if (areSame) {
        req.session.user = candidate;
        req.session.isAuthenticated = true;
        req.session.save((err) => {
          if (err) {
            throw err;
          }
          // req.flash('error', 'Регистрация прошла успешно')
          res.json({ message: "Пользователь вошел в систему" });
        });
      }
    } else {
      // req.flash('error', 'Регистрация прошла успешно')
      res.json({ message: "Необходимо сперва зарегистрироваться" });
      //redirect register
    }
  } catch (e) {}
});

router.get("/logout", async (req, res) => {
  req.session.destroy(() => {
    // req.flash('error', 'Пользователь уже существует')
    res.json({ message: "Пользователь вышел из системы" });
    // res.redirect("/auth");
  });
});

router.post("/register", async (req, res) => {
  try {
    const { email, password, repeat, name } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      // req.flash('error', 'Пользователь уже существует')
      res.json({ message: "Пользователь уже существует" });
      // redirect login
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        name,
        password: hashPassword,
        cart: { items: [] },
      });
      await user.save();
      // req.flash('error', 'Регистрация прошла успешно')
      res.json({ message: "Регистрация прошла успешно" });
      // redirect login
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
