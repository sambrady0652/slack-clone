//External Modules
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require("cors");

//Internal Modules
const { environment } = require('./config');
const apiRouter = require('./routes/api')
const { Message } = require('./db/models')

//Server and Websocket Setup
const app = express();
const http = require('http').createServer(app);
const Websocket = require('ws');
const { error } = require('console');
const wss = new Websocket.Server({ server: http })

//Application-wide Middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

//ROUTES
app.use('/api', apiRouter)

//WEBSOCKETS
wss.on('connection', (ws) => {
  ws.on('message', async (jsonData) => {
    const message = JSON.parse(jsonData);

    const createdMessage = await Message.create(message);
    const jsonCreated = JSON.stringify(createdMessage)
    wss.clients.forEach((client) => {
      if (client.readyState === Websocket.OPEN) {
        client.send(jsonCreated);
      }
    });
  });
  ws.on('close', (e) => {
    console.log(e)
  })
});

//REACT BUILD CONFIG FOR HEROKU
//TODO FIX THIS!!!!!
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (req, res) => {
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
    res.send('sorry page not found', err)
  } else {
    next(err);
  }
});

// Generic Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === 'production';
  // TODO: BETTER ERROR HANDLER 
  console.error(err);
});

module.exports = http