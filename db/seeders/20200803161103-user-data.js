'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        firstName: 'The',
        lastName: 'Boss',
        email: 'the@boss.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF6',
        title: "Head of BossCo.",
        imageUrl: "https://stack-user-photosd94332e2-2c2a-4c08-8ee9-3fc0cc2f3137.s3.amazonaws.com/Default-profpic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Best',
        lastName: 'Friend',
        email: 'best@friend.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF5',
        title: "VP of Friends",
        imageUrl: "https://stack-user-photosd94332e2-2c2a-4c08-8ee9-3fc0cc2f3137.s3.amazonaws.com/Default-profpic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'New',
        lastName: 'Guy',
        email: 'new@guy.com',
        passwordHash: '$2a$05$LhayLxezLhK1LhWvKxCyLOj0j1u.Kj0jZ0pEmm134uzrQlFvQJLF4',
        title: "The New Guy",
        imageUrl: "https://stack-user-photosd94332e2-2c2a-4c08-8ee9-3fc0cc2f3137.s3.amazonaws.com/Default-profpic",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users");
  }
};
