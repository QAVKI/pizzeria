/* eslint-disable max-len */
const mailer = require('../app');

const { Basket, Product, User } = require('../db/models');

const render = require('../lib/render');
const BasketViews = require('../views/BasketViews');

const renderBasket = async (req, res) => {
  let user = req.session.newUser;

  if (user === undefined) user = '';

  const userdb = await User.findOne({ where: { login: user } });
  let basket;

  if (userdb !== null) {
    basket = await Basket.findAll({
      where: { user_id: userdb.id, confirm: false },
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
};

const buyProduct = async (req, res) => {
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
    const dublicate = await Basket.findOne({ where: { user_id: user.id, product_id: +req.params.id, confirm: false } });
    if (dublicate === null) {
      await Basket.create({ user_id: user.id, product_id: +req.params.id, count: 1, confirm: false, comment: '', adress: '' });
    } else {
      const basket = await Basket.findOne({ where: { user_id: user.id, product_id: +req.params.id, confirm: false } });
      await Basket.update({
        count: basket.count + 1,
      }, {
        where: { user_id: user.id, product_id: +req.params.id, confirm: false },
        returning: true,
        plain: true,
      });
    }
  }
  res.sendStatus(200);
};

const clearBasket = async (req) => {
  console.log(req.params.id, '----------------------------------------------')
  if (req.session.newUser !== undefined) {
    const user = await User.findOne({ where: { login: req.session.newUser } });
    await Basket.destroy({ where: { user_id: req.params.id, confirm: true }, returning: true, plain: true });
    const message = {
      from: '<zhtmn@icloud.com>',
      to: user.email,
      subject: 'Order',
      text: 'Ждём вас на сайте вновь!!!',
    };
    mailer(message);
  }
};

const newOrder = async (req, res) => {
  const user = await User.findOne({ where: { login: req.session.newUser } });
  console.log(req.body);
  await Basket.update({
    confirm: true,
    comment: req.body.comment,
    adress: req.body.adress,
  }, {
    where: { user_id: user.id },
    returning: true,
    plain: true,
  });
  const order = await Basket.findAll({
    where: { user_id: user.id, confirm: true },
    include: [
      {
        model: Product,
      },
    ],
    raw: true,
  });
  // console.log(order);
  const message = {
    from: '<zhtmn@icloud.com>',
    to: user.email,
    subject: 'Спасибо за заказ',
    text: `Спасибо за заказ, ваша пицца уже мчит!\n${order.map((el) => el = `${el['Product.title']} x ${el.count}\n`).join(',').split(',').join('')}`,
  };
  mailer(message);
  res.redirect('/');
};

module.exports = {
  renderBasket,
  buyProduct,
  clearBasket,
  newOrder,
};
