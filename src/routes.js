const express = require('express')
const routes = express.Router()
const Users = require('./controllers/users.controllers')

routes.get('/', Users.index);
routes.post('/api/Users', Users.create);

module.exports = routes;
