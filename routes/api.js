//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();
const { asyncHandler } = require('../utils')
const { Channel } = require('../db/models')

//Middleware
router.use(cookieParser());

router.get('/:channelId(\\d+)', asyncHandler(async (req, res) => {
  const channelId = Number(req.params.channelId);

  const channel = await Channel.findOne({
    where: {
      id: channelId
    }
  });
  res.json({ channel })
}));


module.exports = router;
