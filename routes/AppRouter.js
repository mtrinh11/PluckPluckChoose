const Router  = require('express').Router()


//User and Account Routes
const UserRouter  = require('./UserRouter')
const AccountRouter  = require('./AccountRouter')

//Content Routes
const PostRouter  = require('./PostRouter')
// const TagRouter  = require('./TagRouter')
const CategoryRouter  = require('./CategoryRouter')

Router.use('/user', UserRouter)
Router.use('/account', AccountRouter)
Router.use('/post', PostRouter)
// Router.use('/tag', TagRouter)
Router.use('/category', CategoryRouter)

module.exports = Router