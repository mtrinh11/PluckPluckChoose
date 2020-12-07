const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('/tagIt', controller.TagPostToCategory)
//DELETE
Router.delete('/untagIt', controller.RemoveTagFromPost)
//READ
Router.get('/:category_id', controller.GetAllPostsByCategory)
Router.get('/:post_id', controller.GetAllCategoriesOnPost)
<<<<<<< HEAD
Router.get('/test', controller.TagTest)
=======
Router.get('/test', controller.TagTest)

module.exports = Router
>>>>>>> 8535e9ccace17ffda6aed4f553361c0969beff5d
