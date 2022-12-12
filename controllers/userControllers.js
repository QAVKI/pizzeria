const bcrypt = require('bcrypt');
const render = require('../lib/render');
const Cabinet = require('../views/Cabinet');
const { User } = require('../db/models');

const renderCabinet = async (req, res) => {
  console.log(req.session.newUser);
  const thisuser = await User.findOne({ where: { login: req.session.newUser } });
  const user = req.session.newUser;
  if (thisuser.worker) {
    const users = await User.findAll({ where: { worker: false } });
    const workers = await User.findAll({ where: { worker: true } });
    render(Cabinet, { users, workers, user }, res);
  } else {
    const users = '';
    const workers = '';
    render(Cabinet, { users, workers, user }, res);
  }
};

const updateCabinet = async (req, res) => {
  const { login, password } = req.body;
  console.log(req.session.newUser);
  try {
    const hashPas = await bcrypt.hash(password, 10);
    console.log(login, hashPas);
    await User.update(
      {
        login,
        password: hashPas,
      },
      {
        where: { login: req.session.newUser },
        returning: true,
        plain: true,
      },
    );
    req.session.newUser = login;
    req.session.save(() => {
      res.redirect('/home');
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

module.exports = { renderCabinet, updateCabinet };
