'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Channels", [
      {
        name: "General",
        topic: "A place for general chat",
        createdAt: new Date(),
        updatedAt: new Date,
      },
      {
        name: "Sales",
        topic: "A place to discuss Sales",
        createdAt: new Date(),
        updatedAt: new Date,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Channels")
  }
};
