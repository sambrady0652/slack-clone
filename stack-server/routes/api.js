//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');

//Internal Modules
const router = express.Router();

//Middleware
router.use(cookieParser());

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

router.get('/', (req, res) => {
  res.send("Hello this is a route")
})

module.exports = router;
