'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      userRole.belongsTo(models.user, {
        foreignKey: "userId",
        as: "user"
      })
      userRole.belongsTo(models.role, {
        foreignKey: "roleId",
        as: "role"
      })
    }
  }
  userRole.init({
    userId: {
      type: DataTypes.INTEGER,
      references: "users",
      key: "id",
      unique: true
    },
    roleId: {
      type: DataTypes.INTEGER,
      references: "roles",
      key: "id"
    },
  }, {
    sequelize,
    modelName: 'userRole',
  });
  return userRole;
};