const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

const uri = `mongodb+srv://${process.env.CLOUD_MONGO_USER}:${process.env.CLOUD_MONGO_PSW}@cluster0-yu8za.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

mongoose.connection.on('connecting', function() {
  console.log('db connecting');
});

mongoose.connection.on('error', function(err) {
  console.log('error in mongo connection' + err);
  mongoose.disconnect();
});

mongoose.connection.on('disconnected', function() {
  // mongoose.connect(uri);
  console.log('db disconnected');
});

mongoose.connection.on('connected', function() {
  console.log('db connected');
});

module.exports = mongoose;
