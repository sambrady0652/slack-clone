//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
// const morgan = require('morgan');
const cors = require("cors");

//Internal Modules
const { environment } = require('./config');
const apiRouter = require('./routes/api')
const authRouter = require('./routes/authRoutes')

//Server and Websocket Setup
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

//Application-wide Middleware
app.use(cors());
app.use(cookieParser());
// app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use('/api', apiRouter)
app.use('/auth', authRouter)

//WEBSOCKETS
// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });

// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);

//REACT BUILD CONFIG FOR HEROKU
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

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

module.exports = http