// - External Requirements
const express = require('express');
const bcrypt = require('bcryptjs');
const csurf = require('csurf');
const csrfProtection = csurf({ cookie: true });
const cookieParser = require('cookie-parser');

//TODO: Implement Photo Upload with Multer 

// - Internal Requirements
const { asyncHandler, handleValidationErrors, emailNotUnique, validateEmailAndPassword } = require('../utils');
const { User } = require('../db/models');
const { getUserToken, requireAuth } = require('../auth');

const router = express.Router();

//Middleware
router.use(requireAuth);
router.use(cookieParser());

//ROUTES

//Create New User and start user Session
router.post(
  '/signup',
  validateEmailAndPassword,
  handleValidationErrors,
  asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password, imageUrl, title } = req.body;
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
      const id = user.id;
      res.json({ token, user: { id: id } });
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
    const id = user.id;
    res.json({ token, user: { id: id } });
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


module.exports = router;
