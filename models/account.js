'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.belongsTo(models.User, {
        foreignKey:'user_id',
        onDelete:'cascade',
        onUpdate:'cascade'
      })
      Account.hasMany(models.Post, {
        foreignKey:'account_id',
        onDelete:'cascade',
        onUpdate:'cascade'
      })
    }
  };
  Account.init({
    user_id:
    {
       type: DataTypes.INTEGER,
       allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts'
  });
  return Account;
};