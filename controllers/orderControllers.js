const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Order = require('../views/Order');
const mailer = require('../app');
const { User } = require('../db/models');

const renderOrder = async (req, res) => {
  const userInfo = await User.findOne({ where: { login: req.session.newUser }, raw: true });
  const user = [userInfo.login, userInfo.email];
  render(Order, { user }, res);
};

module.exports = { renderOrder };
