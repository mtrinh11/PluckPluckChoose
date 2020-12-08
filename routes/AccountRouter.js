const Router = require('express').Router()
const controller = require('../controllers/AccountController')

Router.post('/create', controller.CreateAccount)
Router.post('/getaccountbyuser', controller.GetOneAccountByUserId)
Router.get('/:id', controller.GetOneAccount)
Router.get('/all/accounts', controller.GetAllAccounts)

module.exports = Router