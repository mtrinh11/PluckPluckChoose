const {Tag, Post, Category } = require('../models')

const TagPostToCategory = async (request, response) => {
    try{
        const postId = request.body.postId
        const categoryId = request.body.categoryId
        const post = await Post.findByPk(postId)
        const category = await Category.findByPk(categoryId)
        console.log('TagPostToCategory --Posts:', typeof(post.dataValues.id))
        let newTag = await Tag.create({
            post_id: parseInt(post.dataValues.id),
            postId: parseInt(post.dataValues.id),
            category_id: parseInt(category.dataValues.id),
            categoryId: parseInt(category.dataValues.id)
        })
        console.log(
            'TagPostToCategory --newTag postId', 
            newTag.postId, 
            'TagPostToCategory --newTag categoryId', 
            newTag.categoryId)
        console.log('BACKEND: TagController: TagPostToCategory')
        response.send(newTag)
        //I'm not sure if this works because I want to grab two params, and I'm doing one request.body
        //originally I had two request.body's, but that seemed weird
        //I'm not sure how to create the association in the through table
    } catch(error)
    {throw error}
}

const RemoveTagFromPost = async (request, response) => {
    try{
        let tagId = parseInt(request.params.tag_id)
        await Tag.destroy({
            where: {
                id: tagId
            }
        })
        console.log('BACKEND: TagController: DeletePost')
        response.send({message: `Deleted tag with an id of ${tagId}`})
    } catch(error){throw error}
}

const GetAllPostsByCategory = async (request, response) => {
    try{
        let categoryId = parseInt(request.params.category_id)
        const allPostsInCategory = await Tag.findAll({
            where: {category_id: categoryId}
        })
        console.log('BACKEND: TagController: GetAllPostsByCategory')
        response.send(allPostsInCategory)
    } catch(error){throw error}
}    

const GetAllCategoriesOnPost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        const allTagsOnPost = await Tag.findAll({
            where: {post_id: postId}
        })
        console.log('BACKEND: TagController: GetAllCategoriesOnPost')
        response.send(allTagsOnPost)
    } catch(error){throw error}
}


module.exports = {
    GetAllPostsByCategory,
    GetAllCategoriesOnPost,
    TagPostToCategory,
    RemoveTagFromPost
}
