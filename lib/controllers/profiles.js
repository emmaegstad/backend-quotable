const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  res.send({
    id: '2',
    name: 'Test User',
    quote: 'It is actually impossible to center a div',
  });
});
