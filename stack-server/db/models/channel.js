'use strict';
module.exports = (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    topic: DataTypes.STRING
  }, {});
  Channel.associate = function (models) {
    const columnMapping = {
      through: "UserJoinChannels",
      foreignKey: "channelId",
      otherKey: "userId"
    }
    Channel.belongsToMany(models.User, columnMapping);
    Channel.hasMany(models.Message, { foreignKey: "channelId" })
  };
  return Channel;
};