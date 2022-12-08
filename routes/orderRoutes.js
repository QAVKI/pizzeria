const express = require('express');

const route = express.Router();

const { renderOrder } = require('../controllers/orderControllers');

route
  .get('/', renderOrder);

module.exports = route;
