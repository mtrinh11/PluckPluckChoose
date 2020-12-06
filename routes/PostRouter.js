const Router = require('express').Router()
const controller = require('../controllers/PostController')

//CREATE
Router.post('/create', controller.CreatePost)
//READ
Router.get('/:post_id', controller.GetSinglePost)
Router.get('/all/posts', controller.GetAllPosts)
//UPDATE
Router.put('/edit/:post_id', controller.EditPost)
Router.put('/upvote/:post_id', controller.UpvotePost)
Router.put('/downvote/:post_id', controller.DownvotePost)
//DESTROY
Router.delete('/delete/:post_id', controller.DeletePost)

module.exports = Router
