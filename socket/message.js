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
  const message = {
    ...msg,
    username: user.username
  };
  // console.log('msgObj', message); return
  Room.findByIdAndUpdate({ _id: user.room }, {
    $push: {
      messages: message
    }
  }, { new: true }).lean().then(savedMessage => {
    const room = { ...savedMessage };
    const nMessage = room.messages[room.messages.length - 1]; // last message
    if (prod) { // send notification in prod mode only
      room.members.splice(room.members.indexOf(user.username), 1);
      room.messages = [nMessage];
      notify(room); // send push notify to all members except self
    }
    io.to(user.room).emit('newMessage', nMessage); // has msg date also
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
const onDeleteMessage = (user, io, msg) => {
  // return (msg) => {
  console.log('msgObj to be del', msg);
  if (msg.image && msg.image !== '') {
    const fPath = process.env.ROOT + '/uploads/' + msg.image;
    if (existsSync(fPath)) {
      unlinkSync(fPath);
    }
  }
  console.log('userObj', user);
  Room.findByIdAndUpdate({ _id: user.room }, { $pull: { messages: { _id: msg._id } } }).then(delMessage => {
    io.to(user.room).emit('deleteMessage', msg);
  }).catch(err =>
    console.error('err ocurred', err)
  );
  // };
}

/** On load older messages
 * @param  {object} user: User Object
 * @param  {object} io: io instance
 * TODO: better jsdoc
 */
const onloadMsgs = (user, io, { skip, limit }) => {
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
    // console.log('ranged msgs: ', ret);
    // socket.emit('loadMsgs', { olderMsgs: ret, count: count[0].num - last });
    io.to(room).emit('loadMsgs', { olderMsgs: ret, count: count[0].num - last, username });
  }).catch(err =>
    console.error('err ocurred', err)
  );
  // };
}

const onLocation = (socket, data) => {
  // return (data) => {
  const { user: { room, username } } = socket;
  socket.broadcast.to(room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, username, new Date());
  // };
}

module.exports = { onNewMessage, onDeleteMessage, onloadMsgs, onLocation };