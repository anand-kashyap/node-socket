const { Schema, model, Types: { ObjectId } } = require('mongoose');

const messageSchema = Schema({
  msg: String,
  image: String,
  username: String
}, { timestamps: true });

const roomSchema = Schema({
  roomName: { type: String, default: '' },
  directMessage: { type: Boolean, default: true },
  members: [String],
  messages: [messageSchema]
}, { timestamps: true }); // creates updated on and created on fields

const Room = model('rooms', roomSchema);

const makeId = id => ObjectId(id);

module.exports = {
  Room, makeId
}