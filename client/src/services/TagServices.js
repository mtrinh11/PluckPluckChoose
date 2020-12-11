import ApiClient from "./ApiServices"

export const __GetAllPostsByCategory = async (categoryId) => {
    try{
        const response = await ApiClient.get(`/tag/posts/${categoryId}`)
        return response.data
    } catch (error) {
        throw error
    }
}
export const __GetAllCategoriesOnPost = async (postId) => {
    try{
        const response = await ApiClient.get(`/tag/categories/${postId}`)
        return response.data
    }catch (error) {
        throw error
    }
}
export const __TagPostToCategory = async (formData) => {
    try{
        const response = await ApiClient.post(`/tag/tagIt`, formData)
        return response.data
    }catch (error) {
        throw error
    }
}
export const __RemoveTagFromPost = async (tagId) => {
    try{
        const response = await ApiClient.delete(`/tag/untagIt/${tagId}`)
        return response.data
    } catch(error) {
        throw error
    }
}

export const __GetTag = async (postId, categoryId) => {
    try{
        const response = await ApiClient.get(`/tag/${categoryId}/${postId}`)
        return response.data
    }catch (error) {
        throw error
    }
}

