const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = Schema({
  roomName: { type: String, default: '' },
  directMessage: { type: Boolean, default: true },
  members: [String],
  messages: { type: Array, default: [] }
}, {timestamps: true }); // creates updated on and created on fields 

const Room = mongoose.model('rooms', roomSchema);

module.exports = {
  Room
}