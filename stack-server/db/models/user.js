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
    // associations can be defined here
  };

  User.prototype.validatePassword = function (password) {
    // because this is a model instance method, `this` is the user instance here:
    return bcrypt.compareSync(password, this.passwordHash.toString());
  };

  return User;
};