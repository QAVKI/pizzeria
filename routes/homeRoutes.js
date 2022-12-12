const express = require('express');

const route = express.Router();
const { renderHome } = require('../controllers/homeControllers');

route.get('/', renderHome);

module.exports = route;
