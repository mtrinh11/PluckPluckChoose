const Router = require('express').Router()
const controller = require('../controllers/PostController')

//CREATE
Router.post('/create', controller.CreatePost)
//READ
Router.get('/:post_id', controller.GetSinglePost)
Router.get('/all/posts', controller.GetAllPosts)
//change get all posts to get "25" posts. otherwise the page could crash 
// if there are say 10,000 posts
//UPDATE
Router.put('/edit/:post_id', controller.EditPost)
Router.put('/upvote/:post_id', controller.UpvotePost)
Router.put('/downvote/:post_id', controller.DownvotePost)
//DESTROY
Router.delete('/delete/:post_id', controller.DeletePost)

module.exports = Router
