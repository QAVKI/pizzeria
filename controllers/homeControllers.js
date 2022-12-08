const { Product, User } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

const renderHome = async (req, res) => { // Отрисовка главной страницы
  let user = req.session?.newUser;
  if (user === undefined) {
    user = '';
  }
  const userInfo = await User.findOne({ where: { login: user } });
  const children = await Product.findAll({ raw: true });
  render(Home, {
    title: 'home', children, user, userInfo,
  }, res);
};

module.exports = { renderHome };
