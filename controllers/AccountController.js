const {Account} = require ('../models')

const CreateAccount = async (request, response) => {
    try{
        let userId = parseInt(request.params.user_id)
        let accountDetails = {
            userId,
            ...request.body
            //I'm not necessarily sure if request.body is necessary since there's not a lot to parse in
        }
        let newAccount = await Account.create(accountDetails)
        console.log('BACKEND: AccountController: CreateAccount')
        response.send(newAccount)
    }catch(error){throw error}
}
 
const GetOneAccount = async (request, response) => {
    try{
        const accountDetails = await Account.findByPk(request.params.id)
        console.log('BACKEND: AccountController: GetOneAccount')
        response.send(accountDetails)
    }catch(error){throw error}
}
 
const GetAllAccounts = async (request, response) => {
    try{
        const allAccounts = await Account.findAll()
        console.log('BACKEND: AccountController: GetAllAccounts')
        response.send(allAccounts)
    }catch(error){throw error}
}
 
module.exports = {
    CreateAccount,
    GetOneAccount,
    GetAllAccounts
}