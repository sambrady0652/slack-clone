'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserLikedMessage = sequelize.define('UserLikedMessage', {
    userId: DataTypes.INTEGER,
    messageId: DataTypes.INTEGER
  }, {});
  UserLikedMessage.associate = function (models) {
    UserLikedMessage.belongsTo(models.User, { foreignKey: "userId" })
    UserLikedMessage.belongsTo(models.Message, { foreignKey: "messageId" })
  };
  return UserLikedMessage;
};