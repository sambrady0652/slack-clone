//EXTERNAL MODULES
const express = require('express');
const bcrypt = require('bcryptjs');
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
const cookieParser = require('cookie-parser');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

//INTERNAL MODULES
const { asyncHandler, handleValidationErrors, emailNotUnique, validateEmailAndPassword } = require('../utils');
const { Channel, User, Message, UserJoinChannel } = require('../db/models')
const { getUserToken, requireAuth } = require('../auth');

const router = express.Router();

//MIDDLEWARE
router.use(requireAuth);
router.use(cookieParser());

//PHOTO UPLOAD CONFIGURATION
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ACCESS_KEY_ID
AWS.config.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new AWS.S3()

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET,
    acl: 'public-read',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: function (req, file, cb) {
      cb(null, file.originalname);
    }
  })
})

//ROUTES

//AuthRoutes
//Create New User and start user Session
router.post(
  '/signup',
  upload.single("profPic"),
  validateEmailAndPassword,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, title } = req.body;
    let imageUrl = "https://stack-user-photosd94332e2-2c2a-4c08-8ee9-3fc0cc2f3137.s3.amazonaws.com/Default-profpic"
    if (req.file) {
      imageUrl = req.file.location
    }
    const passwordHash = await bcrypt.hash(password, 10);
    const emailInUse = await emailNotUnique(email);
    if (emailInUse) {
      const err = new Error("Signup failed");
      err.status = 401;
      err.title = "Signup failed";
      err.errors = ["That email is already in use."];
      res.status(400).json({ err });
    }
    else {
      const user = await User.create({ firstName, lastName, email, passwordHash, imageUrl, title });
      const token = getUserToken(user);
      // const { id, firstName, lastName, email, imageUrl, title } = user;
      res.json({
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastname,
          email: user.email,
          imageUrl: user.imageUrl,
          title: user.title
        }
      });
    }
  }));

//Logs existing user in, begins session
router.post('/signin', asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: {
      email,
    },
  });

  if (!user || !user.validatePassword(password)) {
    const err = new Error("Sign in failed");
    err.status = 401;
    err.title = "Sign in failed";
    err.errors = ["The provided credentials were invalid."];
    res.status(400).json({ err });
  }
  else {
    const token = getUserToken(user);
    const { id, firstName, lastName, email, imageUrl, title } = user;
    res.json({
      token,
      user: {
        id,
        firstName,
        lastName,
        email,
        imageUrl,
        title
      }
    });
  }
}));

//Remove User
router.post(
  'users/:id(\\d+)/',
  csrfProtection,
  asyncHandler(async (req, res) => {
    const userId = parseInt(req.params.id, 10);
    //TODO: Remove user's comments, likes, messages, etc before removing user 
    const user = await User.findByPk(userId);
    await user.destroy();
    res.redirect('/');
  }));


//API Routes

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
  const channels = await UserJoinChannel.findAll({
    where: {
      userId: userId
    },
    include: [Channel]
  })
  res.json({ user, channels });
}));

router.put('/users/:id(\\d+)/channels', asyncHandler(async (req, res) => {
  const { userId, channelId } = req.body
  UserJoinChannel.create({ userId, channelId });
  const user = await User.findOne({
    where: {
      id: userId
    }
  });
  res.json(user);
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
