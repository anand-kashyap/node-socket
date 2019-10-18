const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = Schema({
  roomName: { type: String, unique: true, default: '' },
  members: [String]
});

const Room = mongoose.model('rooms', roomSchema);

module.exports = {
  Room
}