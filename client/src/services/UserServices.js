import ApiClient from './ApiServices';

export const __LoginUser = async(userData) => {
    try {
        const res = await ApiClient.post('/user/login', userData)
        console.log(res)
        localStorage.setItem('token', res.data.token)
        return res
    } catch (error) {
        throw error
    }
}

export const __CheckSession = async (token) => {
    try {
      const res = await ApiClient.get('/user/session', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
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