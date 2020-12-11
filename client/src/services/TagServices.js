import ApiClient from "./ApiServices"

export const __GetAllPostsByCategory = async (categoryId) => {
    try{
        const response = await ApiClient.get(`/tag/posts/${categoryId}`)
        console.log(`FRONTEND: TagServices, __GetAllPostsByCategory`)
        return response.data
    }catch(error){throw error}
}
export const __GetAllCategoriesOnPost = async (postId) => {
    try{
        const response = await ApiClient.get(`/tag/categories/${postId}`)
        console.log(`FRONTEND: TagServices, __GetAllCategoriesOnPost`)
        return response.data
    }catch(error){throw error}
}
export const __TagPostToCategory = async (formData) => {
    try{
        const response = await ApiClient.post(`/tag/tagIt`, formData)
        console.log(`FRONTEND: TagServices, __TagPostToCategory`)
        return response.data
    }catch(error){throw error}
}
export const __RemoveTagFromPost = async (tagId) => {
    try{
        const response = await ApiClient.delete(`/tag/${tagId}`)
        console.log(`FRONTEND: TagServices, __RemoveTagFromPost`)
        return response.data
    }catch(error){throw error}
}

export const __RemoveAllTagsFromPost = async (postId) => {
    try{
        const response = await ApiClient.delete(`/tag/${postId}`)
        console.log('FRONTEND: TagServices, __RemoveAllTagsFromPost hits')
        return response.data
    }catch(error){
        console.log('FRONTEND: TagServices, __RemoveAllTagsFromPost fails')
        throw error
    }
}

export const __GetTag = async (categoryId, postId) => {
    try{
        const response = await ApiClient.get(`/tag/${categoryId}/${postId}`)
        console.log('FRONTEND: Tag Services, GetTag hits')
    }catch(error){
        console.log('FRONTEND: Tag Services, GetTag fails')
        throw error
    }
}