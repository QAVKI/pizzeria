const express = require('express');

const route = express.Router();

const { renderCabinet, updateCabinet } = require('../controllers/userControllers');

route
  .get('/', renderCabinet)
  .post('/', updateCabinet);

module.exports = route;
