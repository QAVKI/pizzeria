const express = require('express');

const route = express.Router();
const { Product, User, Basket } = require('../db/models');

const render = require('../lib/render');
const Home = require('../views/Home');

route.get('/', async (req, res) => { // Отрисовка главной страницы
  let user = req.session?.newUser;
  if (user === undefined) {
    user = '';
  }
  const userInfo = await User.findOne({ where: { login: user } });
  const children = await Product.findAll({ raw: true });
  console.log(children[0])
  render(Home, {
    title: 'home', children, user, userInfo,
  }, res);
});

module.exports = route;
