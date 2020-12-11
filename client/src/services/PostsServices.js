import ApiClient from './ApiServices';

export const __GetOnePost = async (postId) => {
    try {
        const response = await ApiClient.get(`/post/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetPosts = async () => {
    try {
        const response = await ApiClient.get(`/post/all/posts`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetRandomPost = async () => {
    try {
        const response = await ApiClient.get(`/post/random`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UpdatePost = async (post_id, formData) => {
    try {
        const response = await ApiClient.put(`/post/edit/${post_id}`, formData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UploadPost = async (formData) => {
    try {
        const response = await ApiClient.post(`/post/create`, formData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UpvotePost = async (postId) => {
    try {
        const response = await ApiClient.put(`/post/upvote/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DownvotePost = async (postId) => {
    try {
        const response = await ApiClient.put(`/post/downvote/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DeletePost = async (postId) => {
    try {
        const response = await ApiClient.delete(`/post/delete/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetPostsByAccount = async (accountId) => {
    try{
        const response = await ApiClient.get(`/post/account/${accountId}`)
        return response.data
    }catch(error){
        throw error
    }
}

export const __GetMostPlucked = async () => {
    try{
        const response = await ApiClient.get(`/post/most/plucked`)
        return response.data    
    }catch(error){
        throw error
    }
}

export const __GetMostChucked = async () => {
    try{
        const response = await ApiClient.get(`/post/most/chucked`)
        return response.data    
    }catch(error){
        throw error
    }
}