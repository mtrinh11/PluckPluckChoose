'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Account, {
        foreignKey:'account_id',
        onDelete:'cascade',
        onUpdate:'cascade'
      })
      Post.belongsToMany(models.Category, {
        through: models.Tag,
        foreignKey: "post_id",
        onDelete: "cascade",
        onUpdate: "cascade"

      })
    }
  };
  Post.init({
    picture: {
     type: DataTypes.STRING,
     allowNull: false
    },
    upvote:{ 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    downvote:{ 
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    account_id:{
      type: DataTypes.STRING,
      allowNull: false
    },
    title:{
      type: DataTypes.STRING,
    },
    description:{ 
      type: DataTypes.STRING
    }
    }, {
    sequelize,
    modelName: 'Post',
    tableName: 'posts'
  });
  return Post;
};