'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: 'Default',
        lastName: 'User',
        email: 'default@user.com',
        title: "Head of Default",
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Best',
        lastName: 'Friend',
        email: 'best@friend.com',
        title: "VP of Friends",
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'New',
        lastName: 'Guy',
        email: 'new@guy.com',
        title: "The New Guy",
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  }
};
