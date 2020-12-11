const Router = require('express').Router()
const controller = require('../controllers/PostController')


Router.post('/create', controller.CreatePost)

Router.get('/random', controller.GetRandomPost)
Router.get('/:post_id', controller.GetSinglePost)
Router.get('/all/posts', controller.GetAllPosts)
Router.get('/account/:account_id', controller.GetPostsByAccount)
Router.get('/most/plucked', controller.GetMostPlucked)
Router.get('/most/chucked', controller.GetMostChucked)

Router.put('/edit/:post_id', controller.EditPost)
Router.put('/upvote/:post_id', controller.UpvotePost)
Router.put('/downvote/:post_id', controller.DownvotePost)

Router.delete('/delete/:post_id', controller.DeletePost)

module.exports = Router
