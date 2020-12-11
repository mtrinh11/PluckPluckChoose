const Router  = require('express').Router()

const UserRouter  = require('./UserRouter')
const AccountRouter  = require('./AccountRouter')

const PostRouter  = require('./PostRouter')
const CategoryRouter  = require('./CategoryRouter')

const TagRouter  = require('./TagRouter')

Router.use('/user', UserRouter)
Router.use('/account', AccountRouter)
Router.use('/post', PostRouter)
Router.use('/tag', TagRouter)
Router.use('/category', CategoryRouter)

module.exports = Router
