const {Tag, Post, Category } = require('../models')

const TagPostToCategory = async (request, response) => {
    try{
        const postId = request.body.postId
        const categoryId = request.body.categoryId
        const post = await Post.findByPk(postId)
        const category = await Category.findByPk(categoryId)
        let newTag = await Tag.create({
            post_id: parseInt(post.dataValues.id),
            postId: parseInt(post.dataValues.id),
            category_id: parseInt(category.dataValues.id),
            categoryId: parseInt(category.dataValues.id)
        })
        response.send(newTag)
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
        response.send({message: `Deleted tag with an id of ${tagId}`})
    } catch(error){throw error}
}

const RemoveAllTagsFromPost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        await Tag.destroy({
            where: {
                post_id: postId
            }
        })
        response.send({message: `Deleted all tags from post with an id of ${postId}`})
    } catch(error){throw error}
}

const GetAllPostsByCategory = async (request, response) => {
    try{
        let categoryId = parseInt(request.params.category_id)
        const allPostsInCategory = await Tag.findAll({
            where: {category_id: categoryId}
        })
        response.send(allPostsInCategory)
    } catch(error){throw error}
}   


const GetAllCategoriesOnPost = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        const allTagsOnPost = await Tag.findAll({
            where: {post_id: postId}
        })
        response.send(allTagsOnPost)
    } catch(error){throw error}
}

const GetTag = async (request, response) => {
    try{
        let postId = parseInt(request.params.post_id)
        let categoryId = parseInt(request.params.category_id)
        let tagId = await Tag.findOne({
            attributes: ['id'],
            where: {
                post_id: postId,
                category_id: categoryId
            }
        })
        response.send(tagId)
    }catch(error){
        throw error
    }
}


module.exports = {
    GetAllPostsByCategory,
    GetAllCategoriesOnPost,
    TagPostToCategory,
    RemoveTagFromPost,
    GetTag
}
