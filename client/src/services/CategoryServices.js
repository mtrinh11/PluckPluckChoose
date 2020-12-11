import ApiClient from './ApiServices';

export const __GetCategory = async (categoryId) => {
    try {
        const response = await ApiClient.get(`/category/${categoryId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __CreateCategory = async (formData) => {
    try {
        const response = await ApiClient.post('/category/create', formData)
        return response.data
    } catch (error) {
        throw error
    }
}
export const __GetAllCategories = async () => {
    try {
        const response = await ApiClient.get(`/category/all/categories`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DeleteCategory = async (categoryId) => {
    try {
        const response = await ApiClient.delete(`/category/delete/${categoryId}`)
        return response.data
    } catch (error) {
        throw error
    }
}



export const __EditCategory = async (formData, categoryId) => {
    try {
        const response = await ApiClient.put(`/category/edit/${categoryId}`, formData)
    } catch (error) {
        throw error
    }
}

export const __FindCategoryByName = async (formData) => {
    try{
        const response = await ApiClient.get(`/category/findByName/${formData}`, )
        return response.data
    } catch(error){
        throw error
    }
}