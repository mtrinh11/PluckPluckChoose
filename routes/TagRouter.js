const Router = require('express').Router()
const controller = require('../controllers/TagController')


Router.post('/tagIt', controller.TagPostToCategory)

Router.delete('/untagIt/:tag_id', controller.RemoveTagFromPost)
Router.delete('/:post_id', controller.RemoveTagFromPost)

Router.get('/categories/:post_id', controller.GetAllCategoriesOnPost)
Router.get('/posts/:category_id', controller.GetAllPostsByCategory)
Router.get('/:category_id/:post_id', controller.GetTag)

module.exports = Router

