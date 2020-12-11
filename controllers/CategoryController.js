const {Category} = require('../models')

const CreateCategory = async (request, response) => {
    try {
        let categoryDetails = {
            ...request.body
        }
        let newCategory = await Category.create(categoryDetails)
        response.send(newCategory)
    } catch(error) {
        throw error
    }
}

const GetCategory = async (request, response) => {
    try {
        let oneCategory = await Category.findByPk(request.params.categoryId)
        response.send(oneCategory)
    } catch(error) {
        throw error
    }
}

const GetAllCategories = async (request, response) => {
    try {
        let allCategories = await Category.findAll()
        response.send(allCategories)
    } catch(error) {
        throw error
    }
}

const EditCategory = async (request, response) => {
    try{
        let categoryId = parseInt(request.params.categoryId)
        let updatedDetails = request.body
        let editedCategory = await Category.update(updatedDetails,{
            where: {
                id: categoryId
            }
        })
        response.send(editedCategory)
    } catch(error) {
        throw error
    }
}

const DeleteCategory = async (request, response) => {
    try {
        let categoryId = parseInt(request.params.categoryId)
        await Category.destroy({
            where: {
                id: categoryId
            }
        })
        response.send({message: `Deleted Category with an ID of ${categoryId}`})
    } catch(error) {
        throw error
    }
}


const GetCategoryIdByName = async (request, response) => {
    try {
        let categoryName = request.params.category_name
        let foundCategory = await Category.findOne({
            where: {
                name: categoryName
            }
        })
        response.send(foundCategory)
    } catch(error) {
        throw error
    }
}




module.exports = {
    CreateCategory,
    GetCategory,
    GetAllCategories,
    EditCategory,
    DeleteCategory,
    GetCategoryIdByName
}