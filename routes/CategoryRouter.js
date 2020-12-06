const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

Router.post('/create', controller.CreateCategory)
Router.get('/:categoryid', controller.GetCategory)
Router.get('/all/categories', controller.GetAllCategories)
Router.put('/edit/:categoryid', controller.EditCategory)
Router.delete('/delete/:categoryid', controller.DeleteCategory)



module.exports = Router