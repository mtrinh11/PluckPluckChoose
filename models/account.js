'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
       types: DataTypes.INTEGER,
       allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Account',
    tableName: 'accounts'
  });
  return Account;
};