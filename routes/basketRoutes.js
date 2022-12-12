const express = require('express');

const route = express.Router();
const {
  renderBasket,
  buyProduct,
  clearBasket,
  newOrder,
} = require('../controllers/basketControllers');

route.get('/', renderBasket);

route.put('/:id', buyProduct);

route.post('/', newOrder);

route.delete('/:id', clearBasket);

module.exports = route;
