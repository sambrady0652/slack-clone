//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();
const { asyncHandler } = require('../utils')

//Middleware
router.use(cookieParser());

router.get('/', (req, res) => {
  res.send("Hello this is a route")
})


module.exports = router;
