const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

process.stdin.resume();

// whitelisted only home and office IPs

const uri = `mongodb+srv://${process.env.CLOUD_MONGO_USER}:${process.env.CLOUD_MONGO_PSW}@cluster0-yu8za.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

mongoose.connection.on('connecting', function() {
  console.log('db connecting');
});

mongoose.connection.on('error', function(err) {
  console.log('error in mongo connection' + err.message);
  mongoose.disconnect();
});

mongoose.connection.on('disconnected', function() {
  // mongoose.connect(uri);
  console.log('db disconnected');
});

mongoose.connection.on('connected', function() {
  console.log('db connected');
});

gracefulShutdown = function (msg, callback) {
  mongoose.connection.close();
  console.log('Mongo disconnected through ' + msg);
  callback();
};

// For nodemon restarts
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// For app termination
process.on('SIGINT', function() {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

// For Heroku app termination
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app termination', function () {
    process.exit(0);
  });
});

module.exports = mongoose;
