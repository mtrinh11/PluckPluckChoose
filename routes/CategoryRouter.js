const Router = require('express').Router()
const controller = require('../controllers/CategoryController')

Router.post('/create', controller.CreateCategory)
Router.get('/findByName/:category_name', controller.GetCategoryIdByName)
Router.get('/:categoryId', controller.GetCategory)
Router.get('/all/categories', controller.GetAllCategories)
Router.put('/edit/:categoryId', controller.EditCategory)
Router.delete('/delete/:categoryId', controller.DeleteCategory)
<<<<<<< HEAD
Router.get('/findByName/', controller.GetCategoryIdByName)
=======
>>>>>>> 19f6e0da376fe1a773a77b70054a96a8bd623285


module.exports = Router