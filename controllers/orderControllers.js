const render = require('../lib/render');
const Order = require('../views/Order');
const { User, Basket } = require('../db/models');

const renderOrder = async (req, res) => {
  if (req.session.newUser !== undefined) {
    const userInfo = await User.findOne({ where: { login: req.session.newUser }, raw: true });
    const children = await Basket.findAll({ where: { user_id: userInfo.id } });
    if (children[0] !== undefined) {
      const user = [userInfo.login, userInfo.email];
      render(Order, { user }, res);
    } else {
      res.redirect('/');
    }
  } else {
    res.redirect('/');
  }
};

module.exports = { renderOrder };
