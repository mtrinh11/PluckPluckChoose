import ApiClient from './ApiServices';

export const __LoginUser = async(userData) => {
    try {
        const res = await ApiClient.post('/user/login', userData)
        localStorage.setItem('token', res.data.token)
    } catch (error) {
        throw error
    }
}

export const __CheckSession = async () => {
    try {
      const res = await ApiClient.get('/users/refresh/session')
      return res.data
    } catch (error) {
      throw error
    }
}

export const __CreateUser = async(userData) => {
    try {
        const res = await ApiClient.post('/user/create', userData)
        return res.data
    } catch (error) {
        throw error
    }
}

// export const __UpdateUser = async() => {
//     try {

//     } catch (error) {
//         throw error
//     }
// }

// export const __DeleteUser = async() => {
//     try {

//     } catch (error) {
//         throw error
//     }
// }