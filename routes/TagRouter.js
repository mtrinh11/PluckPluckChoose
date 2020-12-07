const Router = require('express').Router()
const controller = require('../controllers/TagController')

//CREATE
Router.post('tagIt', controller.TagPostToCategory)
//DELETE
Router.delete('untagIt', controller.TagPostToCategory)
//READ
Router.get('/:category_id', controller.GetAllPostsByCategory)
Router.get('/:post_id', controller.GetAllCategoriesOnPost)
Router.get('/test', controller.TagTest)