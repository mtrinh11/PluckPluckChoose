const { hashPassword, passwordValid } = require('../middleware')
const {User} = require('../models')

const CreateUser = async (request, response) => {
    try{
<<<<<<< HEAD
        const body = request.body
        const user = await User.create(body)
        console.log('BACKEND: UserController: CreateUser')
=======
        const { username, email, password } = request.body
        const passwordDigest = await hashPassword(password)
        const user = await User.create({ username, email, passwordDigest})
        console.log('BACKEND: UserController: User')
>>>>>>> 9b54ff02c7db6a8ff236523964857f5be987e17d
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
            where: {email: request.body.email},
            raw: true//added raw: true so we return the user with raw values, we dont need the model definitions for what we're doing here.
        })
        console.log('BACKEND: UserController: LoginUser --email received', user)
        if (user && (await passwordValid(require.body.password, user.passwordDigest))) {
            let payload = {//change payload from const to let
                _id: user.id,//undersore may be unnecessary
                username: user.username
            }
            let token = createToken(payload)
            return response.send({user, token})
        }
<<<<<<< HEAD
        user && await(
            (request.body.password_digest === user.password_digest)
            ? ( console.log('BACKEND: UserController: Login User --Login success'),
                response.send(payload) 
            ): (
                console.log('BACKEND: UserController: Login User --Login failed'),
                response.status(401).send({message: `no dice!`})
            ))
            console.log('BACKEND: UserController: LoginUser --password check')
=======
        // user && await(
        //     (request.body.password_digest === user.password_digest)
        //     ? response.send(payload) : response.status(401).send({message: `no dice!`})
        // )
        console.log('BACKEND: UserController: LoginUser --password check')
>>>>>>> 9b54ff02c7db6a8ff236523964857f5be987e17d
    }catch(error){throw error}
}

const SessionStatus = async (req, res) => {
    try {
      const { token } = res.locals
      const user = await User.findByPk(token.id, {
        attributes: ['id', 'name', 'email'] // Find a user by the id encoded in the json web token, only include the id, name and email fields
      })
      res.send({ user, status: 'OK' })
    } catch (error) {
      throw error
    }
  }

module.exports = {
    CreateUser,
    GetUser,
    LoginUser,
    SessionStatus
}