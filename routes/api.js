//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();
const { asyncHandler } = require('../utils')
const { Channel, User, Message, UserJoinChannel } = require('../db/models')

//Middleware
router.use(cookieParser());

router.get('/channels/:id(\\d+)', asyncHandler(async (req, res) => {
  const channelId = Number(req.params.id);

  const channel = await Channel.findOne({
    where: {
      id: channelId
    },
    include: [{ model: Message, include: [User] }],
  });
  const users = await UserJoinChannel.findAll({
    where: {
      channelId: channelId
    },
    include: [User]
  })
  res.json({ channel, users })
}));


router.get('/users/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);
  const user = await User.findOne({
    where: {
      id: userId
    },
    include: [{ model: Message }],

  });
  const { id, firstName, lastName, email, imageUrl, title } = user;
  res.json({
    id,
    firstName,
    lastName,
    email,
    imageUrl,
    title
  });
}));

router.put('/messages', asyncHandler(async (req, res) => {
  const { newMessage, channelId, userId } = req.body;

  const message = await Message.create({
    content: newMessage,
    userId,
    channelId
  });
  res.json({ message })
}))
module.exports = router;
