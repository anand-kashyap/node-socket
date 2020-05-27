const dotenv = require('dotenv').config(), //for getting env file variables
  { join } = require('path'),
  cors = require('cors'),
  compression = require('compression'),
  express = require('express'),
  { createServer } = require('http'),
  { urlencoded, json } = require('body-parser'),
  socketio = require('socket.io');

const app = express(),
  server = createServer(app),
  io = socketio(server);

const port = process.env.PORT || 3000,
  publicDirPath = join(__dirname, 'uploads');

process.env.ROOT = __dirname;
//imports
const mongoose = require('./config/dbconnection');

//routes
const test = require('./api/routes/test'),
  files = require('./api/routes/files'),
  user = require('./api/routes/user'),
  room = require('./api/routes/room');

const socketHandle = require('./socket/main');
socketHandle(io);

app.use(cors());

//body-parser
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(compression());

app.use('/api/uploads', express.static(publicDirPath));
//test db connection
app.use('/api/*', function (req, res, next) {
  // console.log(mongoose.connection.readyState);
  if (mongoose.connection.readyState !== 1) {
    return res.status(500)
      .json({ success: false, message: 'Unable to connect to database' });
  }
  next();
});

app.use('/api/test', test);
app.use('/api/files', files);
app.use('/api/user', user);
app.use('/api/room', room);

server.listen(port, () => console.log(`listening on http://localhost:${port}`));
