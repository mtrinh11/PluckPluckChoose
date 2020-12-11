const {Account} = require ('../models')

const CreateAccount = async (request, response) => {
    try {
        let accountDetails = {
            ...request.body
        }
        let newAccount = await Account.create(accountDetails)
        response.send(newAccount)
    } catch (error) {
        throw error
    }
}
 
const GetOneAccount = async (request, response) => {
    try {
        const accountDetails = await Account.findByPk(request.params.id)
        response.send(accountDetails)
    } catch (error) {
        throw error
    }
}

const GetOneAccountByUserId = async (request, response) => {
    try {
        const accountDetails = await Account.findAll({
            where: {user_id: request.body.user_id}
        })
        response.send(accountDetails[0])
    } catch(error) {
        throw error
    }
}
 
const GetAllAccounts = async (request, response) => {
    try {
        const allAccounts = await Account.findAll()
        response.send(allAccounts)
    } catch(error) {
        throw error
    }
}
 
module.exports = {
    CreateAccount,
    GetOneAccount,
    GetAllAccounts,
    GetOneAccountByUserId 
}