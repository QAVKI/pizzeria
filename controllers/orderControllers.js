const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Order = require('../views/Order');
const mailer = require('../app');
const { User } = require('../db/models');

const renderOrder = (req, res) => {
  render(Order, null, res);
};

// const regUser = async (req, res) => {
//   const { login, password, email } = req.body;
//   try {
//     const hashPas = await bcrypt.hash(password, 10);
//     const newUser = await User.create({ login, password: hashPas, email });
//     console.log('новый юзер======>>>>>>>>>>>>>', newUser);
//     const message = {
//       from: '<zhtmn@icloud.com>',
//       to: email,
//       subject: 'Succes Registration',
//       text: `Поздравляем, вы зарегистрированы, можете бежать за покупками!\nВаш логин: ${login}\nВаш пароль: ${password}`,
//     };
//     console.log(message);
//     mailer(message);
//     req.session.newUser = newUser.login;
//     req.session.save(() => {
//       res.redirect('/home');
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { renderOrder };
