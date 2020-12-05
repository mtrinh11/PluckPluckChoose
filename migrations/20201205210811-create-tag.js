'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postId: {
        type: DataTypes.INTEGER,
        field: "post_id",
        allowNull: false,
        references: {
          model: "post",
          key: "id"
        }
      },
      categoryId: {
        type: DataTypes.INTEGER,
        field: "category_id",
        allowNull:false,
        references: {
          model: "category",
          key: "id"
        }
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
    await queryInterface.dropTable('tags');
  }
};