'use strict';

const {Post, Category, sequelize} = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const tags = await Promise.all(
    [...Array(10)].map(async (_) => {
        let post = await Post.findOne({order: sequelize.random(), raw: true})
        let category = await Category.findOne({order: sequelize.random(), raw: true})
        return {
          post_id: post.id,
          category_id: category.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    })
  )

    await queryInterface.bulkInsert('tags', tags)
    return 
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tags')
  }
};
