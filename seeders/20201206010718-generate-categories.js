'use strict';

const faker = require('faker')

const categories = [...Array(10)].map( (acc) => ({
  name: faker.hacker.noun(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('categories', categories)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories')
  }
};
