const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

roomSchema.virtual('lastMessage').get(function () {
  return this.messages[this.messages.length - 1];
});

roomSchema.set('toJSON', {
  virtuals: true
});
const Room = mongoose.model('rooms', roomSchema);

const makeId = (id) => {
  return mongoose.Types.ObjectId(id);
}

module.exports = {
  Room, makeId
}