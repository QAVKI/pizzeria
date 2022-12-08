const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.redirect('/home');
});

module.exports = route;
