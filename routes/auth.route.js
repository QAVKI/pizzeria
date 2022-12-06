const express = require('express');
const router = express.Router();
const { isValid } = require('../middlewares/functs');

const {
  createUserAndSession,
  checkAdminAndCreateSession,
  renderSignUpForm,
  renderSignInForm,
  deleteSession,
} = require('../controllers/auth.controller');

router
  .route('/signin')
  .get(renderSignInForm) // Страница аутентификации пользователя
  .post(checkAdminAndCreateSession); // Аутентификация пользователя

 router
  .route('/signup')
  .get(renderSignUpForm) // Страница регистрации пользователя
  .post(isValid, createUserAndSession); // Регистрация пользователя

router.get('/signout', deleteSession);

module.exports = router;
