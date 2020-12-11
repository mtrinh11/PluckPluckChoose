const {Post, sequelize} = require('../models')
const UserController = require('./UserController')


const CreatePost = async (request, response) => {
    try{
        const body = request.body
        const post = await Post.create(body)
        response.send(post)
    } catch(error) {
        response.status(401).send({message: `no dice!`})
        throw error
    }
}
 
const GetSinglePost = async (request, response) => {
    try {
        const onePost = await Post.findByPk(request.params.post_id)
        response.send(onePost)
    } catch(error) {
        throw error
    }
}

const GetRandomPost = async (request, response) => {
    try {
        const randPost = await Post.findOne({order: sequelize.random(), raw: true})
        response.send(randPost)
    } catch(error) {
        throw error
    }
}
 
const GetAllPosts = async (request, response) => {
    try {
        const allPosts = await Post.findAll()
        response.send(allPosts)
    } catch(error) {
        throw error
    }
}
const EditPost = async (request, response) => {
    try  {
        let postId = parseInt(request.params.post_id)
        let postDetails = request.body
        let editedPost = await Post.update(postDetails,{
            where: {id: postId}
        })
        response.send(editedPost)
    } catch(error) {
        throw error
    }
}
 
const DeletePost = async (request, response) => {
    try {
        let postId = parseInt(request.params.post_id)
        await Post.destroy({
            where: {
                id: postId
            }
        })
        response.send({message: `Deleted post with an id of ${postId}`})
    } catch(error) {
        throw error
    }
}
 
const UpvotePost = async (request, response) => {
    try {
        const upvotedPost = await Post.increment( 
            {upvote: 1},
            {where: {id: request.params.post_id}}
        )
        response.send(upvotedPost)
    } catch(error) {
        throw error
    }
}

const DownvotePost = async (request, response) => {
    try {
        const downvotedPost = await Post.increment( 
            {downvote: 1},
            {where: {id: request.params.post_id}}
        )
        response.send(downvotedPost)
    } catch(error) {
        throw error
    }
}
 
const GetPostsByAccount = async (request, response) => {
    try {
        const AccountId = request.params.account_id
        const AccountPosts = await Post.findAll(
            {where: {account_id:AccountId} }
        )
        response.send(AccountPosts)
    } catch(error) {
        throw error
    }
}

const GetMostPlucked = async (request, response) => {
    try{
        const mostPlucked = await Post.findAll({
            order: [['upvote', 'DESC']]
        })
        response.send(mostPlucked.splice(0, 10))
    } catch(error) {
        throw error
    }
}

const GetMostChucked = async (request, response) => {
    try {
        const mostChucked = await Post.findAll({
            order: [['downvote', 'DESC']]
        })
        response.send(mostChucked.splice(0, 10))
    } catch(error){
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


 