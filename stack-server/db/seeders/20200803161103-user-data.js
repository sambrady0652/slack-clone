'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: 'Default',
        lastName: 'User',
        email: 'default@user.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6',
        title: "Head of Default",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Best',
        lastName: 'Friend',
        email: 'best@friend.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF5',
        title: "VP of Friends",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'New',
        lastName: 'Guy',
        email: 'new@guy.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF4',
        title: "The New Guy",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  }
};
