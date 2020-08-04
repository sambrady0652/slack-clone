'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserJoinChannel = sequelize.define('UserJoinChannel', {
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {});
  UserJoinChannel.associate = function (models) {
    UserJoinChannel.belongsTo(models.User, { foreignKey: "userId" });
    UserJoinChannel.belongsTo(models.Channel, { foreignKey: "channelId" });
  };
  return UserJoinChannel;
};