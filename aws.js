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

const port = 2500;
const publicDirPath = join(__dirname, 'uploads');
process.env.ROOT = __dirname;
//imports
const mongoose = require('./config/dbconnection');

//routes
const files = require('./api/routes/files'),
  user = require('./api/routes/user'),
  room = require('./api/routes/room');

const socketHandle = require('./socket/main');
socketHandle(io);

//body-parser
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(compression());
app.use(cors({ origin: true }));

app.use('/uploads', express.static(publicDirPath));
//test db connection
app.use('/*', function (req, res, next) {
  // console.log(mongoose.connection.readyState);
  if (mongoose.connection.readyState !== 1) {
    return res.status(500)
      .json({ success: false, message: 'Unable to connect to database' });
  }
  next();
});

app.use('/files', files);
app.use('/user', user);
app.use('/room', room);

/* app.use(express.static('./public'));
app.get('/*', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname + '/public' });
}); */
server.listen(port, () => console.log(`listening on http://localhost:${port}`));
