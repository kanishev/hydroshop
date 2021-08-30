const { Router } = require("express");
const path = require("path");
const User = require("../models/user");
const nodemailer = require("nodemailer");
const sendgrid = require("nodemailer-sendgrid-transport");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const keys = require("../keys/index");
const reqEmail = require("../emails/registration");
const resetEmail = require("../emails/reset");
const Product = require("../models/product");
const router = Router();

const transporter = nodemailer.createTransport(
  sendgrid({
    auth: { api_key: keys.SENDGRID_KEY },
  })
);

router.get("/", (req, res) => {
  return res.json(req.session.user);
});

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
          return res.json({
            message: {
              value: "Пользователь вошел в систему",
              type: "success"
            },
            user: req.session.user.role,
          });
        });
      } else {
        return res.json({ message: {
          value: "Неверный пароль",
          type: 'error'
        }});
      }
    } else {
      // req.flash('error', 'Регистрация прошла успешно')
      return res.json({ message: {
        value: "Необходимо сперва зарегистрироваться",
        type: 'warn'
      }});
      //redirect register
    }
  } catch (e) {
    console.log(e);
  }
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
    const { email, password, confirm, name } = req.body;

    const candidate = await User.findOne({ email });

    if (candidate) {
      // req.flash('error', 'Пользователь уже существует')
      return res.json({ message: "Пользователь уже существует" });
      // redirect login
    } else {
      if (password !== confirm) {
        return res.json({ message: "Пароли должны совпадать" });
      }
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        name,
        password: hashPassword,
        cart: { items: [] },
        role: email === 'admin@mail.ru' ? 'ADMIN' : 'USER'
      });
      await user.save();

      //redirect before sending email

      await transporter.sendMail(reqEmail(email));
      // req.flash('error', 'Регистрация прошла успешно')
      return res.json({ message: "Регистрация прошла успешно" });
      // redirect login
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/reset", (req, res) => {
  try {
    crypto.randomBytes(32, async (err, buffer) => {
      if (err) {
        // req.flash('error', 'Что то пошло не так')
        // res.redirect('auth/reset')
        return res.json({ message: "Что то пошло не так" });
      }

      const token = buffer.toString("hex");
      const candidate = await User.findOne({ email: req.body.email });

      if (candidate) {
        candidate.resetToken = token;
        candidate.resetTokenExp = Date.now() + 60 * 60 * 1000;
        await candidate.save();
        await transporter.sendMail(resetEmail(candidate.email, token));
        return res.json({ message: "Проверьте почту" });
      } else {
        // req.flash('error', 'Что то пошло не так')
        // res.redirect('auth/reset')
        return res.json({ message: "Такого email нет" });
      }
    });
  } catch (e) {
    console.log(e);
  }
});

router.get("/password/:token", async (req, res) => {
  if (!req.params.token) {
    // return res.redirect('/auth/login')
    return res.json({ message: "Нет токена" });
  }

  try {
    const user = await User.findOne({
      resetToken: req.params.token,
      resetTokenExp: { $gt: Date.now() },
    });

    if (!user) {
      // return res.redirect('/auth/login')
      return res.json({ message: "Нет токена" });
    } else {
      return res.sendFile(path.join(__dirname, "../views", "reset.html"));
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/password", async (req, res) => {
  try {
    const user = await User.findOne({
      resetToken: req.query.token,
      resetTokenExp: { $gt: Date.now() },
    });


    if (user) {
      user.password = await bcrypt.hash(req.body.password, 10);
      user.resetToken = undefined;
      user.resetTokenExp = undefined;
      await user.save();
      // res.redirect('auth/reset')
      return res.json({ message: "Пароль обновлен" });
    } else {
      // req.flash('error', 'Что то пошло не так')
      // res.redirect('auth/reset')
      return res.json({ message: "Время жизни токена истекло" });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
