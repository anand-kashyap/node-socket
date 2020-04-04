const { existsSync, unlinkSync } = require('fs');
const { Room } = require('../api/models/room');
const { notify } = require('./users');

/** On New Message Method
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onNewMessage = (user, io, msg, prod) => {
  // return (msg, prod) => {
  const toMessage = {
    ...msg,
    username: user.username
  };
  // console.log('msgObj', message); return
  Room.findByIdAndUpdate({ _id: user.room }, {
    $push: {
      messages: toMessage
    }
  }, { new: true }).lean().then(savedMessage => {
    const room = { ...savedMessage };
    const message = room.messages[room.messages.length - 1]; // last message
    if (prod) { // send notification in prod mode only
      room.members.splice(room.members.indexOf(user.username), 1);
      room.messages = [message];
      notify(room); // send push notify to all members except self
    }
    io.to(user.room).emit('newMessage', { message, roomId: user.room }); // has msg date also
  }).catch(err =>
    console.error('err ocurred', err)
  );
  // };
}

/** On Delete Message
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onDeleteMessage = (user, io, message) => {
  // return (msg) => {
  console.log('msgObj to be del', message);
  if (message.image && message.image !== '') {
    const fPath = process.env.ROOT + '/uploads/' + message.image;
    if (existsSync(fPath)) {
      unlinkSync(fPath);
    }
  }
  console.log('userObj', user);
  Room.findByIdAndUpdate({ _id: user.room }, { $pull: { messages: { _id: message._id } } }).then(delMessage => {
    const { room } = user;
    io.to(room).emit('deleteMessage', { message, roomId: room });
  }).catch(err =>
    console.error('err ocurred', err)
  );
  // };
}

/** On load older messages
 * @param  {object} user: User Object
 * @param  {object} socket: socket instance
 * TODO: better jsdoc
 */
const onloadMsgs = (user, socket, { skip, limit }) => {
  // return ({ skip, limit }) => {
  console.log('msgs to skip from last', skip);
  // console.log('userObj', user);
  const last = skip + limit;
  const { username, room } = user;
  Room.findById({ _id: room }, { messages: { $slice: -last } }).then(async older => {
    const count = await Room.aggregate([
      { $match: { _id: older._id } },
      { $project: { num: { $size: '$messages' } } }
    ]);
    console.log('count of msgs: ', count);

    const las = older.messages.length - skip;
    const ret = older.messages.slice(0, las);
    socket.emit('loadMsgs', { roomId: room, olderMsgs: ret, count: count[0].num - last });
  }).catch(err =>
    console.error('err ocurred', err)
  );
  // };
}

const onLocation = (socket, data) => {
  // return (data) => {
  const { user: { room, username } } = socket;
  // ! need to send params in on arg
  socket.broadcast.to(room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, username, new Date(), room);
  // };
}

module.exports = { onNewMessage, onDeleteMessage, onloadMsgs, onLocation };