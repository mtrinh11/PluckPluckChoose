const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('/tagIt', controller.TagPostToCategory)
//DELETE
Router.delete('/untagIt/:tag_id', controller.RemoveTagFromPost)
Router.delete('/:post_id', controller.RemoveTagFromPost)
//READ
Router.get('/categories/:post_id', controller.GetAllCategoriesOnPost)
Router.get('/posts/:category_id', controller.GetAllPostsByCategory)
Router.get('/:category_id/:post_id', controller.GetTag)

module.exports = Router

