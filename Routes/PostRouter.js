const Router = require('express').Router()
const controller = require('../controllers/PostController')

//CREATE
Router.post('/create', controller.CreatePost)
//READ
Router.get('/:postid', controller.GetSinglePost)
Router.get('/all/posts', controller.GetAllPosts)
//UPDATE
Router.put('/edit/:postid', controller.EditPost)
Router.put('/upvote/:postid', controller.UpvotePost)
Router.put('/downvote/:postid', controller.DownvotePost)
//DESTROY
Router.delete('/delete/:postid', controller.DeletePost)

module.exports = Router
