//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();
const { asyncHandler } = require('../utils')
const { Channel, User, Message } = require('../db/models')

//Middleware
router.use(cookieParser());

router.get('/channels/:id(\\d+)', asyncHandler(async (req, res) => {
  const channelId = Number(req.params.id);

  const channel = await Channel.findOne({
    where: {
      id: channelId
    },
    include: [{ model: User }, { model: Message }],

  });
  res.json({ channel })
}));

router.get('/channels/general', asyncHandler(async (req, res) => {
  const general = await Channel.findOne({
    where: {
      name: "General"
    },
    include: [{ model: User }, { model: Message }],

  });
  res.json({ general })
}));



router.get('/users/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = Number(req.params.id);
  const user = await User.findOne({
    where: {
      id: userId
    },
    include: [{ model: Channel }, { model: Message }],

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


module.exports = router;
