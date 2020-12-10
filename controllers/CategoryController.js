const {Category} = require('../models')

const CreateCategory = async (request, response) => {
    try{
        let categoryDetails = {
            ...request.body
        }
        let newCategory = await Category.create(categoryDetails)
        console.log('BACKEND: CategoryController CreateCategory')
        response.send(newCategory)
    }catch(error){throw error}
}

const GetCategory = async (request, response) => {
    try{
        let oneCategory = await Category.findByPk(request.params.categoryId)
        console.log('BACKEND: CategoryController GetCategory')
        //throw error in a ternary  or something if category does not exist
        response.send(oneCategory)
    }catch(error){throw error}
}

const GetAllCategories = async (request, response) => {
    try{
        let allCategories = await Category.findAll()
        console.log('BACKEND: CategoryController GetAllCategories')
        response.send(allCategories)
    }catch(error){throw error}
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
        console.log('BACKEND: CategoryController EditCategory')
        response.send(editedCategory)
    }catch(error){throw error}
}

const DeleteCategory = async (request, response) => {
    try{
        let categoryId = parseInt(request.params.categoryId)
        await Category.destroy({
            where: {
                id: categoryId
            }
        })
        console.log('BACKEND: CategoryController DeleteCategory')
        response.send({message: `Deleted Category with an ID of ${categoryId}`})
    }catch(error){throw error}
}


const GetCategoryIdByName = async (request, response) => {
    try {
        let categoryName = request.params.category_name
        let foundCategory = await Category.findOne({
            where: {
                name: categoryName
            }
        })
        console.log('CategoryController GetCategoryIdByName hits')
        console.log(foundCategory)
        response.send(foundCategory)
    }catch(error) {
        console.log('CategoryController GetCategoryIdByName fails')
        throw error
    }
}

module.exports = {
    CreateCategory,
    GetCategory,
    GetAllCategories,
    //POSTMVP The following functions would only be accessible by admin privileges
    // They are included now in the purpose of our own project management
    // These are not necessary for MVP but are included for our own ease of use in testing
    EditCategory,
    DeleteCategory,
    GetCategoryIdByName
}