import ApiClient from './ApiServices';

export const __GetOnePost = async (postId) => {
    try {
        console.log(`FRONTEND: PostServices:__GetOnePost`)
        const response = await ApiClient.get(`/post/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetPosts = async () => {
    try {
        console.log(`FRONTEND: PostServices:__GetPosts`)
        const response = await ApiClient.get(`/post/all/posts`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetRandomPost = async () => {
    try {
        console.log(`FRONTEND: PostServices:__GetRandomPosts`)
        const response = await ApiClient.get(`/post/random`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UpdatePost = async (post_id, formData) => {
    try {
        console.log(`FRONTEND: PostServices: __UpdatePosts`)
        const response = await ApiClient.put(`/post/edit/${post_id}`, formData)
        
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UploadPost = async (formData) => {
    try {
        console.log(`FRONTEND: PostServices: __UploadPost`)
        const response = await ApiClient.post(`/post/create`, formData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UpvotePost = async (postId) => {
    try {
        console.log(`FRONTEND: PostServices: __UpvotePost`)
        const response = await ApiClient.put(`/post/upvote/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DownvotePost = async (postId) => {
    try {
        console.log(`FRONTEND: PostServices: __DownvotePosts`)
        const response = await ApiClient.put(`/post/downvote/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DeletePost = async (postId) => {
    try {
        console.log(`FRONTEND: PostServices: __deletePosts`)
        const response = await ApiClient.delete(`/post/delete/${postId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __GetPostsByAccount = async (accountId) => {
    try{
        
        console.log(`FRONTEND: PostServices: __GetPostsByAccount`)
        const response = await ApiClient.get(`/post/account/${accountId}`)
        return response.data
    }catch(error){
        throw error
    }
}

export const __GetMostPlucked = async () => {
    try{
        const response = await ApiClient.get(`/post/most/plucked`)
        console.log('FRONTEND PostServices __GetMostPlucked hits')
        return response.data    
    }catch(error){
        console.log('FRONTEND PostServices __GetMostPlucked fails')    
        throw error
    }
}

export const __GetMostChucked = async () => {
    try{
        const response = await ApiClient.get(`/post/most/chucked`)
        console.log('FRONTEND PostServices __GetMostChucked hits')
        return response.data    
    }catch(error){
        console.log('FRONTEND PostServices __GetMostChucked fails')    
        throw error
    }
}

//feel like these should be camelcased but let's focus on functionality for now 
//-nz