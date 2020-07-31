//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//Internal Modules
const { environment } = require('./config');
const apiRouter = require('./routes/api')

//Declarations
const app = express();

//Application-wide Middleware
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use('/api', apiRouter)

//ERRORS
// Error Catch
app.use((req, res, next) => {
  const err = new Error("The requested page couldn't be found.");
  err.status = 404;
  next(err);
});

//Error Logger
app.use((err, req, res, next) => {
  if (environment === 'production' || environment === 'test') {
    // TODO Log the error to the database.
  } else {
    console.error(err);
  }
  next(err);
});

// 404 Error Handler
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404);
    //TODO: BETTER ERROR HANDLER 
    res.send('sorry page not found')
  } else {
    next(err);
  }
});

// Generic Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';
  // TODO: BETTER ERROR HANDLER 
  res.send("sorry, server error")
});

module.exports = app;
