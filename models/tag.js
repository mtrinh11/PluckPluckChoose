'use strict';

const {
  Model
} = require('sequelize');
const category = require('./category');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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