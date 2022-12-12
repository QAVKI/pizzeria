const bcrypt = require('bcrypt');
const render = require('../lib/render');
const SignIn = require('../views/SignIn');

const { User } = require('../db/models');

const renderSignIn = (req, res) => {
  render(SignIn, null, res);
};

const loginUser = async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.newUser = user.login;
        req.session.save(() => {
          // console.log(user.worker);
          if (user.worker) {
            res.redirect('/worker');
          } else {
            res.redirect('/home');
          }
        });
      } else {
        res.redirect('/auth/registration');
      }
    } else {
      res.redirect('/auth/registration');
    }
  } catch (error) {
    res.send('error ==>', error);
  }
};

const signOut = async (req, res) => {
  if (req.session.newUser !== undefined) {
    req.session.destroy(() => {
      res.clearCookie('bears');
      res.redirect('/home');
    });
  } else {
    res.redirect('/home');
  }
};

module.exports = { renderSignIn, loginUser, signOut };
