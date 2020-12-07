'use strict';

const faker = require('faker')
let counter = 154

const accounts = [...Array(10)].map( (acc) => {

  let tempInsert = {
  user_id: counter,
  createdAt: new Date(),
  updatedAt: new Date()
}
counter++
return tempInsert
})

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
   return queryInterface.bulkInsert('accounts', accounts)
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
