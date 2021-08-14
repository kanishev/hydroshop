const keys = require("../keys");

module.exports = function (to, token) {
  return {
    to,
    from: keys.EMAIL_FROM,
    subject: "Восстановление доступа",
    html: `
      <h1>Вы забыли пароль?</h1>
      <p>Если нет - проигнорируйте письмо</p>
      <p>Иначе нажмите на ссылку ниже:</p>
      <p><a href="${keys.BASE_URL}/auth/password/${token}">Восстановить</a></p>

      <hr />
      <a href="${keys.BASE_URL}">Перейти в магазин</a>
    `,
  };
};
