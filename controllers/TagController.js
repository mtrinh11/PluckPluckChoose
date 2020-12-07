const {Tag} = require('../models')

const TagPostToCategory = async (request, response) => {
    try{
        const categoryAndPost = request.body
        const newTag = await Tag.create(categoryAndPost)
        console.log('BACKEND: TagController: TagPostToCategory')
        response.send(newTag)
        //I'm not sure if this works because I want to grab two params, and I'm doing one request.body
        //originally I had two request.body's, but that seemed weird
        //I'm not sure how to create the association in the through table
    } catch(error){throw error}
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

const TagTest = async (request, response) => {
    try{
        console.log('BACKEND TagController, TagTest')
        response.send({message:"This route is working"})
    } catch(error){throw error}
}
<<<<<<< HEAD
=======

>>>>>>> 8535e9ccace17ffda6aed4f553361c0969beff5d



module.exports = {
    GetAllPostsByCategory,
    GetAllCategoriesOnPost,
    TagPostToCategory,
    RemoveTagFromPost,
    TagTest
}