const { hashPassword, passwordValid, createToken } = require('../middleware')
const {User} = require('../models')


const CreateUser = async (request, response) => {
    try{
        const { username, email, password } = request.body
        const passwordDigest = await hashPassword(password)
        const user = await User.create({ username, email, passwordDigest})
        console.log('BACKEND: UserController: User')
        response.send(user)
    }catch(error){
        response.status(401).send({message: `no dice!`})
        throw error
    }
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
            where: {email: request.body.email},
            raw: true
        })
        if (user && (await passwordValid(request.body.password, user.passwordDigest))) {
            let payload = {
                _id: user.id,
                username: user.username
            }
            let token = createToken(payload)
            return response.send({user, token})
        }
        return (response.status(401).send({message: `no dice!`}))
    }catch(error){throw error}
}

const SessionStatus = async (req, res) => {
    try {
      const { token } = res.locals
      const user = await User.findByPk(token._id, {
        attributes: ['id', 'username', 'email']
      })
      res.send({ user, status: 'OK' })
    } catch (error) {
        res.status(401).send({message: 'invalid session'})
        throw error
    }
}

module.exports = {
    CreateUser,
    GetUser,
    LoginUser,
    SessionStatus
}