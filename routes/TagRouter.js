const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('/tagIt', controller.TagPostToCategory)
//DELETE
Router.delete('/untagIt/:tagId', controller.RemoveTagFromPost)
//READ

Router.get('/category/:category_id', controller.GetAllCategoriesOnPost)
Router.get('/post/:post_id', controller.GetAllPostsByCategory)

module.exports = Router

