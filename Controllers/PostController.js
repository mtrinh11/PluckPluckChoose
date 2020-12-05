const {Post} = require('../models')
const UserController = require('./UserController')
7
const CreatePost = async (request, response) => {
    try{
        const body = request.body
        console.log('BACKEND: PostController: CreatePost --request.body', body)
        const post = await /* Post Model */.create(body)
        console.log('BACKEND: PostController: CreatePost --created post')
        response.send(post)
    }catch(error){throw error}
}
 
const GetSinglePost = async (request, response) => {
    try{
        const onePost = await /**Post Model */.findByPk(request.params.post_id)
        console.log('BACKEND: PostController: GetSinglePost')
        response.send(onePost)
    }catch(error){throw error}
}
 
const GetAllPosts = async (request, response) => {
    try{
        const allPosts = await /**Post Model */.findAll()
        console.log('BACKEND: PostController: GetAllPosts')
        response.send(allPosts)
    }catch(error){throw error}
}
 
const EditPost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        let postDetails = request.body
        let editedPost = await /**Post Model */.update(postDetails,{
            where: {id: postId}
        })
        console.log('BACKEND: PostController: EditPost')
        response.send(editedPost)
    }catch(error){throw error}
}
 
const DeletePost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        await /**PostModel*/.destroy({
            where: {
                id: postId
            }
        })
        console.log('BACKEND: PostController: Post')
        response.send({message: })
    }catch(error){throw error}
}
 
const Post = async (request, response) => {
    try{
        console.log('BACKEND: PostController: Post')
        response.send()
    }catch(error){throw error}
}
 


module.exports ={
    CreatePost,
    GetSinglePost,
    GetAllPosts,
    UpvotePost,
    DownvotePost,
    DeletePost
 }