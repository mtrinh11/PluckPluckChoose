'use strict';

const faker = require('faker')
const {sequelize, Account} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const posts = await Promise.all(
      [...Array(10)].map(async (_) => {
          let account = await Account.findOne({order: sequelize.random(), raw: true})
          return {
            picture: faker.image.imageUrl(),
            upvote: Math.floor(Math.random() * 100),
            downvote: Math.floor(Math.random() * 100),
            title: faker.lorem.sentence(),
            description: faker.lorem.sentence(),
            account_id: account.id,
            createdAt: new Date(),
            updatedAt: new Date()
          }
      })
    )
  await queryInterface.bulkInsert('posts', posts)
  
  return
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('posts')
  }
};
