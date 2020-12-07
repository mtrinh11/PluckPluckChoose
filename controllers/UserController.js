const {User} = require('../models')

const CreateUser = async (request, response) => {
    try{
        const body = request.body
        const user = await User.create(body)
        console.log('BACKEND: UserController: User')
        response.send(user)
    }catch(error){throw error}
}
 
const GetUser = async (request, response) => {
    try{
        const user = await User.findByPk(request.params.user_id)
        console.log('BACKEND: UserController: GetUser')
        response.send(user)
    }catch(error){throw error}
}
 
const LoginUser = async (request, response) => {
    try{
        const user = await User.findOne({
            where: {email: request.body.email}
        })
        console.log('BACKEND: UserController: LoginUser --email received', user)
        const payload = {
            _id: user.id,
            username: user.username
        }
        user && await(
<<<<<<< HEAD
<<<<<<< HEAD
            (request.body.password === user.password)
            ? ( console.log('BACKEND: UserController: Login User --Login success'),
                response.send(payload) 
        ): (
            console.log('BACKEND: UserController: Login User --Login failed'),
            response.status(401).send({message: `no dice!`})
        ))
        console.log('BACKEND: UserController: LoginUser --password check')
        
=======
=======
>>>>>>> 7bdb6c060368c11d3a6f74338db608e827bf7582
            (request.body.password_digest === user.password_digest)
            ? response.send(payload) : response.status(401).send({message: `no dice!`})
        )
        console.log('BACKEND: UserController: LoginUser --password check')
<<<<<<< HEAD
>>>>>>> 7bdb6c060368c11d3a6f74338db608e827bf7582
=======
>>>>>>> 7bdb6c060368c11d3a6f74338db608e827bf7582
    }catch(error){throw error}
}
 


module.exports = {
    CreateUser,
    GetUser,
    LoginUser
}