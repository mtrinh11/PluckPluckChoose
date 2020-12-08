import ApiClient from './ApiServices';

export const __GetAccount = async(id) => {
    try {
        const res = ApiClient.get(`/account/${id}`)
        return res 
    } catch (error) {
        throw error
    }
}

export const __CreateAccount = async(formData) => {
    try {
        const res = ApiClient.post('/account/create', formData)
        return res
    } catch (error) {
        throw error
    }
}

export const __GetAccountByUserId = async(formData) => {
    try {
        const res = ApiClient.post('/account/getaccountbyuser', formData)
        return res
    } catch (error) {
        throw error
    }
}

// export const __UpdateAccount = async() => {
//     try {

//     } catch (error) {
//         throw error
//     }
// }

// export const __DeleteAccount = async() => {
//     try {

//     } catch (error) {
//         throw error
//     }
// }