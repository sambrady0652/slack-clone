'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER,
    content: DataTypes.STRING
  }, {});
  Message.associate = function (models) {
    const columnMapping = {
      through: "UserLikedMessage",
      foreignKey: "messageId",
      otherKey: "userId"
    }
    Message.belongsTo(models.User, { foreignKey: "userId" });
    Message.belongsTo(models.Channel, { foreignKey: "channelId" });
    //NOTE: Might be conflicting associations going on here 
    Message.belongsToMany(models.User, columnMapping);
  };
  return Message;
};