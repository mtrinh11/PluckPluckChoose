const {Post, sequelize} = require('../models')
const UserController = require('./UserController')


const CreatePost = async (request, response) => {
    try{
        const body = request.body
        console.log('BACKEND: PostController: CreatePost --request.body', body)
        const post = await Post.create(body)
        console.log('BACKEND: PostController: CreatePost --created post')
        response.send(post)
    }catch(error){
        response.status(401).send({message: `no dice!`})
        throw error
    }
}
 
const GetSinglePost = async (request, response) => {
    try{
        const onePost = await Post.findByPk(request.params.post_id)
        console.log('BACKEND: PostController: GetSinglePost')
        response.send(onePost)
    }catch(error){throw error}
}

const GetRandomPost = async (request, response) => {
    try{
        const randPost = await Post.findOne({order: sequelize.random(), raw: true})
        console.log('BACKEND: PostController: GetRandomPost')
        response.send(randPost)
    }catch(error){throw error}
}
 
const GetAllPosts = async (request, response) => {
    try{
        const allPosts = await Post.findAll()
        console.log('BACKEND: PostController: GetAllPosts')
        response.send(allPosts)
    }catch(error){throw error}
}

//EditPost is used to change a post's category so it's separate from the upvote/downvote
const EditPost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        let postDetails = request.body
        let editedPost = await Post.update(postDetails,{
            where: {id: postId}
        })
        console.log('BACKEND: PostController: EditPost')
        response.send(editedPost)
    }catch(error){throw error}
}
 
const DeletePost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        await Post.destroy({
            where: {
                id: postId
            }
        })
        console.log('BACKEND: PostController: DeletePost')
        response.send({message: `Deleted post with an id of ${postId}`})
    }catch(error){throw error}
}
 
const UpvotePost = async (request, response) => {
    try{
        const upvotedPost = await Post.increment( 
            {upvote: 1},
            {where: {id: request.params.post_id}}
        )
        console.log('BACKEND: PostController: UpvotePost')
        response.send(upvotedPost)
    }catch(error){throw error}
}
// ^----These can be merged into one function, with a ternary or some shid ----v
const DownvotePost = async (request, response) => {
    try{
        const downvotedPost = await Post.increment( 
            {downvote: 1},
            {where: {id: request.params.post_id}}
        )
        console.log('BACKEND: PostController: DownvotePost')
        response.send(downvotedPost)
    }catch(error){throw error}
}
 
const GetPostsByAccount = async (request, response) => {
    try{
        const AccountId = request.params.account_id
        const AccountPosts = await Post.findAll(
            {where: {account_id:AccountId} }
        )
        response.send(AccountPosts)
    }catch(error){throw error}
}

const GetMostPlucked = async (request, response) => {
    try{
        const mostPlucked = await Post.findAll({
            order: [['upvote', 'DESC']]
        })
        response.send(mostPlucked)
        console.log('BACKEND: PostController GetMostPlucked hits')
    }catch(error){
        console.log('BACKEND: PostController GetMostPlucked fails')
        throw error
    }
}

const GetMostChucked = async (request, response) => {
    try{
        const mostChucked = await Post.findAll({
            order: [['downvote', 'DESC']]
        })
        response.send(mostChucked)
        console.log('BACKEND: PostController GetMostChucked hits')
    }catch(error){
        console.log('BACKEND: PostController GetMostChucked fails')
        throw error
    }
}

module.exports ={
    CreatePost,
    GetSinglePost,
    GetRandomPost,
    GetAllPosts,
    EditPost,
    UpvotePost,
    DownvotePost,
    DeletePost,
    GetPostsByAccount,
    GetMostPlucked,
    GetMostChucked
 }


 