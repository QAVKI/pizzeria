const express = require('express');

const route = express.Router();
const { renderBasket, buyProduct, clearBasket } = require('../controllers/basketControllers');

route.get('/', renderBasket);

route.put('/:id', buyProduct);

route.delete('/', clearBasket);

module.exports = route;
