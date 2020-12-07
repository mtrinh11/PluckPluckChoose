'use strict';

const faker = require('faker')


const posts = [...Array(10)].map( (acc) => ({
  picture: faker.image.imageUrl(),
  account_id: 154,
  //  Math.floor(Math.random() * 9) ,
  upvote: Math.floor(Math.random() * 10),
  downvote: Math.floor(Math.random() * 10),
  createdAt: new Date(),
  updatedAt: new Date()
}))

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
   return queryInterface.bulkInsert('posts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('posts')
  }
};
