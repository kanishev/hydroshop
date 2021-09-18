const keys = require("../keys");

module.exports = function (to) {
  return {
    to,
    from: keys.EMAIL_FROM,
    subject: "Регистрация прошла успешна",
    html: `
      <h1>Добро пожаловать в магазин</h1>
      <p>Вы успешно создали аккаунт с email ${to}</p>
      <hr />
      <a href="${keys.BASE_URL}">Перейти в магазин</a>
    `,
  };
};
