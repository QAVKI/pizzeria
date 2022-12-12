const express = require('express');

const route = express.Router();
const { renderWorker } = require('../controllers/workerControllers');

route.get('/', renderWorker);

module.exports = route;
