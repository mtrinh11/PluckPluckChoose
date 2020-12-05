'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false
      },
      upvote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      downvote: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      accountId: {
        field: 'account_id',
        type: Sequelize.INTEGER,
        references: {
          model: 'accounts',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  }
};