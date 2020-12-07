import ApiClient from './ApiServices';

export const __GetOnePost = async () => {
    try {
        console.log(`FRONTEND: PostServices:__GetOnePost`)
        const response = await ApiClient.get(`/post/${post_id}`)
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

export const __UpdatePost = async () => {
    try {
        console.log(`FRONTEND: PostServices: __UpdatePosts`)
        const response = await ApiClient.put(`/post/edit/${post_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UploadPost = async () => {
    try {
        console.log(`FRONTEND: PostServices: __UploaPost`)
        const response = await ApiClient.post(`/post/create`, formData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __UpvotePost = async () => {
    try {
        console.log(`FRONTEND: PostServices: __UpvotePost`)
        const response = await ApiClient.put(`/post/upvote/${post_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DownvotePost = async () => {
    try {
        console.log(`FRONTEND: PostServices: __DownvotePosts`)
        const response = await ApiClient.put(`/post/downvote/${post_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const __DeletePost = async () => {
    try {
        console.log(`FRONTEND: PostServices: __deletePosts`)
        const response = await ApiClient.delete(`/post/${post_id}`)
        return response.data
    } catch (error) {
        throw error
    }
}