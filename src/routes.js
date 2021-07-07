const express = require('express')
const routes = express.Router()
const Users = require('./controllers/users.controllers')

routes.get('/', Users.index);
routes.post('/api/Users', Users.create);
routes.get('/api/Users', Users.index);
routes.get('/api/Users.details', Users.details);
routes.delete('/api/Users/:_id', Users.delete);
routes.put('/api/Users', Users.update)

module.exports = routes;