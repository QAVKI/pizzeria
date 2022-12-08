const express = require('express');

const route = express.Router();
const { signOut } = require('../controllers/signinControllers');

route.get('/', signOut);

module.exports = route;
