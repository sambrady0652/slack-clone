const bcrypt = require('bcryptjs');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },

    //NOTE: remove allowNull restriction if it is disrupting frontend error handling 
    email: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    passwordHash: {
      type: DataTypes.STRING.BINARY,
      allowNull: false
    },
    imageUrl: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  User.associate = function (models) {
    const columnMapping = {
      through: "UserJoinChannels",
      foreignKey: "userId",
      otherKey: "channelId"
    }
    const messageColumnMapping = {
      through: "UserLikedMessages",
      foreignKey: "userId",
      otherKey: "messageId"
    }
    User.belongsToMany(models.Channel, columnMapping);
    User.hasMany(models.Message, { foreignKey: "userId" });
    User.belongsToMany(models.Message, messageColumnMapping);
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.passwordHash.toString());
  };

  return User;
};