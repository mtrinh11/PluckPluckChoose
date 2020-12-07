'use strict';

const faker = require('faker')
const {User, sequelize} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const accounts = await Promise.all(
      [...Array(10)].map(async (_) => {
          let user = await User.findOne({order: sequelize.random(), raw: true})
          return {
          user_id: user.id,
          createdAt: new Date(),
          updatedAt: new Date()
          }
      })
    )
   await queryInterface.bulkInsert('accounts', accounts)
   return
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('accounts')
  }
};
