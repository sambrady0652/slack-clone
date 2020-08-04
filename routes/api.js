//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();
const { asyncHandler } = require('../utils')
const { Channel, User, Message } = require('../db/models')

//Middleware
router.use(cookieParser());

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const channelId = Number(req.params.id);

  const channel = await Channel.findOne({
    where: {
      id: channelId
    },
    include: [{ model: User }, { model: Message }],

  });
  res.json({ channel })
}));


module.exports = router;
