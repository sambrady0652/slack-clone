'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Messages", [
      {
        userId: 1,
        channelId: 1,
        content: "Hi, it's me, the boss! Just wanted to say hello on the General Chat.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        channelId: 1,
        content: "Hi Boss! This is a lovely General chat, is it not?",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        channelId: 1,
        content: "Hi all! I'm the new guy in General Chat!",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        channelId: 2,
        content: "I know this is supposed to be about Sales, but I just wanted to talk about that New Guy...",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        channelId: 2,
        content: "Yeah, he hasn't joined this chat, so he can't see what we're saying about him. what do you think of him? ",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        channelId: 2,
        content: "Honestly? He seems like a great guy. Very excited to work with him.",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Messages");
  }
};
