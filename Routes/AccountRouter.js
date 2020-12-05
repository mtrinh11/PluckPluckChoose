const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.post('/create', controller.CreateAccount)
Router.get('/:accountid', controller.GetOneAccount)
Router.get('/all/accounts', controller.GetAllAccounts)

module.exports = Router