const { addUser, removeUser, getUsers, removeOnline, notify } = require('./users');
const { Room } = require('./api/models/room');

/** On New Message Method
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onNewMessage = (user, io) => {
  return (msg, prod) => {
    const message = {
      msg,
      username: user.username
    };
    console.log('msgObj', message);
    Room.findByIdAndUpdate({ _id: user.room }, {
      $push: {
        messages: message
      }
    }, { new: true }).lean().then(savedMessage => {
      if (prod) { // send notification in prod mode only
        const room = { ...savedMessage };
        const message = room.messages[room.messages.length - 1]; // last message
        room.members.splice(room.members.indexOf(user.username), 1);
        room.messages = [message];
        notify(room); // send push notify to all members except self
      }
      io.to(user.room).emit('newMessage', message);
    }).catch(err =>
      console.error('err ocurred', err)
    );
  };
}

/** On Delete Message
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onDeleteMessage = (user, io) => {
  return (msg) => {
    console.log('msgObj to be del', msg);
    console.log('userObj', user);
    Room.findByIdAndUpdate({ _id: user.room }, { $pull: { messages: { _id: msg._id } } }).then(delMessage => {
      io.to(user.room).emit('deleteMessage', msg);
    }).catch(err =>
      console.error('err ocurred', err)
    );
  };
}

/** On Socket Disconnect
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onSocketDisconnect = (user, io) => {
  return () => {
    const delUser = removeUser(user);
    console.log('after remove', getUsers());
    if (!delUser.tabs) {
      io.to(user.room).emit('clientLeft', removeOnline(user));
    }
  };
}
const socketHandle = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', (options, callback) => {
      // const sessionId = socket.handshake.session.id;
      const { user, onlineUsers } = addUser({ socketId: socket.id, ...options });
      // console.log('sessionId', sessionId) // same value on every connection
      socket.join(user.room);

      console.log('after join', getUsers());
      socket.broadcast.to(user.room).emit('newClient', { username: user.username, onlineUsers });

      socket.on('newMessage', onNewMessage(user, io));
      socket.on('deleteMessage', onDeleteMessage(user, io));

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
      });

      socket.on('logout', () => {
        socket.disconnect();
      });

      socket.on('disconnect', onSocketDisconnect(user, io));

      callback(onlineUsers);
    });

  });
}

module.exports = socketHandle;

