const dotenv = require('dotenv').config(); //for getting env file variables
const path = require('path');
const cors = require('cors');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
// const publicDirPath = path.join(__dirname, 'public');

//routes
const user = require('./api/routes/user');

const socketHandle = require('./socketio');
socketHandle(io);

const corsOptions = {
  origin: process.env.ALLOWED_CORS_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
/* app.use(express.static(publicDirPath));
//test db connection
app.use('/*', function(req, res, next) {
  // console.log(mongoose.connection.readyState);
  if(mongoose.connection.readyState !== 1) {
    return res.status(500)
      .json({success: false, message: 'Unable to connect to database'});
  }
  next();
}); */

app.use('/user', user);

server.listen(port, () => console.log(`listening on http://localhost:${port}`));
