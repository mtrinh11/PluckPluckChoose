'use strict';
const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
    }
  };
  Tag.init({
    postId: {
      type: DataTypes.INTEGER,
      field: "post_id",
      references: {
        model: "posts",
        key: "id"
      },
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      field: "category_id",
      references: {
        model: "category",
        key: "id"
      },
      allowNull:false,
    }
  }, {
    sequelize,
    modelName: 'Tag',
    tableName: 'tags'
  });
  return Tag;
};