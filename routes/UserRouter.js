const Router = require('express').Router ()
const controller = require('../controllers/UserController')

Router.post('/create', controller.CreateUser)
Router.post('/login', controller.LoginUser)
Router.get('/:user_id', controller.GetUser)

module.exports = Router