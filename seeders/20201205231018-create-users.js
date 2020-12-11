'use strict';
const faker = require('faker')

const users = [...Array(10)].map( (user) => ({
  username: faker.name.findName(),
  email: faker.internet.email(),
  password_digest: faker.internet.password(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users')
  }
};
