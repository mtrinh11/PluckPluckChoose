import ApiClient from './ApiServices';


// create, get, get all, edit, delete

export const __GetCategory = async (categoryId) => {
    try {
        const response = await ApiClient.get(`/category/${categoryId}`)
        console.log('FRONTEND: CategoryServices: __GetCategory')
    } catch (error) {
        throw error
    }
}

export const __CreateCategory = async (formData) => {
    try {
        console.log('FRONTEND: CategoryServices: __CreateCategory')
        const response = await ApiClient.post('/category/create', formData)
        return response.data
    } catch (error) {
        throw error
    }
}
export const __GetAllCategories = async () => {
    try {
        console.log('FRONTEND: CategoryServices: __GetAllCategories')
        const response = await ApiClient.get(`/category/all/categories`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DeleteCategory = async (categoryId) => {
    try {
        console.log('FRONTEND: CategoryServices: __DeleteCategory')
        const response = await ApiClient.delete(`/category/delete/${categoryId}`)
        return response.data
    } catch (error) {
        throw error
    }
}



export const __EditCategory = async (formData, categoryId) => {
    try {
        const response = await ApiClient.put(`/category/edit/${categoryId}`, formData)
        console.log('FRONTEND: CategoryServices: __EditCategory')
    } catch (error) {
        throw error
    }
}

export const __FindCategoryByName = async (formData) => {
    try{
        const response = await ApiClient.get(`/findByName/${formData}`)
        return response.data
        console.log('CategoryServices __FindCategoryByName hits')
    } catch(error){
        console.log('CategoryServices __FindCategoryByName fails')
        throw error
    }
}