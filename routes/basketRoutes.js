const express = require('express');

const route = express.Router();
const mailer = require('../app');

const { Basket, Product, Select, User } = require('../db/models');

const render = require('../lib/render');
const BasketViews = require('../views/BasketViews');

route.get('/', async (req, res) => {
  let user = req.session.newUser;

  if (user === undefined) user = '';

  const userdb = await User.findOne({ where: { login: user } });
  let basket;

  if (userdb !== null) {
    basket = await Basket.findAll({
      where: { user_id: userdb.id },
      include: [
        {
          model: Product,
        },
      ],
      raw: true,
    });
    if (!basket) {
      basket = [{
        'Product.logo': '',
        id: '',
        count: '',
        'Product.title': '',
        'Product.price': '',
      }];
    }
  }
  render(BasketViews, { title: 'basket', user, basket }, res);
});

route.put('/:id', async (req, res) => {
  const productcount = await Product.findOne({ where: { id: +req.params.id } });
  if (req.session.newUser) {
    await Product.update({
      count: productcount.count - 1,
    }, {
      where: { id: req.params.id },
      returning: true,
      plain: true,
    });
    const user = await User.findOne({ where: { login: req.session.newUser } });
    const dublicate = await Basket.findOne({ where:{user_id: user.id, product_id: +req.params.id}});
    if (dublicate === null) {
      await Basket.create({ user_id: user.id, product_id: +req.params.id, count: 1 });
    } else {
      const basket = await Basket.findOne({where:{ user_id: user.id, product_id: +req.params.id }});

      await Basket.update({
        count: basket.count + 1,
      }, {
        where: { user_id: user.id, product_id: +req.params.id },
        returning: true,
        plain: true,
      });
    }
  }
  res.sendStatus(200);
});

route.delete('/', async (req, res) => {
  if (req.session.newUser !== undefined) {
    if (req.session.newUser !== undefined) {
      const user = await User.findOne({ where: { login: req.session.newUser } });
      await Basket.destroy({ where: { user_id: user.id }, returning: true, plain: true });
      const message = {
        from: '<zhtmn@icloud.com>',
        to: user.email,
        subject: 'Order',
        text: 'Поздравляем вас c покупкой, приходите к нам ещё',
      };
      // console.log(message);
      mailer(message);
    }
  }
});

module.exports = route;
