const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('/tagIt', controller.TagPostToCategory)
//DELETE
Router.delete('/untagIt', controller.RemoveTagFromPost)
//READ
<<<<<<< HEAD
Router.get('/:category_id', controller.GetAllPostsByCategory)
Router.get('/:post_id', controller.GetAllCategoriesOnPost)
<<<<<<< HEAD
Router.get('/test', controller.TagTest)
=======
Router.get('/test', controller.TagTest)
=======
Router.get('/category/:category_id', controller.GetAllCategoriesOnPost)
Router.get('/post/:post_id', controller.GetAllPostsByCategory)
>>>>>>> ee399acdb7c58b109f6bde19f6fbde0bc09cbebd

module.exports = Router
>>>>>>> 8535e9ccace17ffda6aed4f553361c0969beff5d
