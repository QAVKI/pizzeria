const { Product, User, Basket } = require('../db/models');

const render = require('../lib/render');
const Worker = require('../views/Worker');

const renderWorker = async (req, res) => { // Отрисовка главной страницы
  let user = req.session?.newUser;
  let children;
  if (user === undefined) {
    user = '';
  }
  const userInfo = await User.findOne({ where: { login: user } });
  let first = await Basket.findOne({ where: { confirm: true } });
  if (first !== null) {
    children = await Basket.findAll({
      where: { user_id: first.user_id, confirm: true },
      include: [
        {
          model: Product,
        },
      ],
      raw: true,
    });
    first = first.user_id;
  } else {
    first = '';
  }
  if (children === undefined) {
    children = [{ 'Product.title': '' }];
  }
  const { worker } = userInfo;
  console.log(children[0])
  render(Worker, {
    title: 'home', children, user, userInfo, worker, first,
  }, res);
};

module.exports = { renderWorker };
