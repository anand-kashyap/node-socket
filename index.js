const dotenv = require('dotenv').config(); //for getting env file variables
const path = require('path');
const cors = require('cors'),
compression = require('compression'),
express = require('express'),
http = require('http'),
bodyParser = require('body-parser'),
socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 3000;
const publicDirPath = path.join(__dirname, 'public');
//imports
const mongoose = require('./config/dbconnection');

//routes
const user = require('./api/routes/user');

const socketHandle = require('./socketio');
socketHandle(io);

const whitelist = [process.env.ALLOWED_CORS_URL, process.env.ALLOWED_CORS_URL_PROD];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());

// app.use(cors(corsOptions));
app.use(express.static(publicDirPath));
//test db connection
app.use('/*', function(req, res, next) {
  // console.log(mongoose.connection.readyState);
  if(mongoose.connection.readyState !== 1) {
    return res.status(500)
      .json({success: false, message: 'Unable to connect to database'});
  }
  next();
});

app.use('/user', user);

server.listen(port, () => console.log(`listening on http://localhost:${port}`));
