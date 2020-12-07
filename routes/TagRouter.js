const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('/tagIt', controller.TagPostToCategory)
//DELETE
<<<<<<< HEAD
Router.delete('/untagIt/:tagId', controller.RemoveTagFromPost)
//READ

Router.get('/category/:category_id', controller.GetAllCategoriesOnPost)
Router.get('/post/:post_id', controller.GetAllPostsByCategory)
=======
Router.delete('/untagIt/:tag_id', controller.RemoveTagFromPost)
//READ
Router.get('/categories/:post_id', controller.GetAllCategoriesOnPost)
Router.get('/posts/:category_id', controller.GetAllPostsByCategory)
>>>>>>> 9a08cdef3114422f715f208c7c582236a9a89644

module.exports = Router

