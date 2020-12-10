'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.Account, {
        foreignKey:'user_id',
        onDelete:'cascade',
        onUpdate:'cascade'
      })
    }
  };
  User.init(
    {
      username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      passwordDigest: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'password_digest'
      }
    }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });
  return User;
};