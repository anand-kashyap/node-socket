const { addUser, removeUser, findUsers, findUserIndex, getUsers } = require('./users');
const { Room } = require('./api/models/room');


/** On New Message Method
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onNewMessage = (user, io) => {
  return (msg) => {
    const message = {
      msg,
      username: user.username,
      date: new Date()
    };
    console.log('msgObj', message);
    io.to(user.room).emit('newMessage', { ...message });
    Room.findByIdAndUpdate({ _id: user.room }, {
      $push: {
        messages: message
      }
    }, { new: true }).catch(err =>
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
    console.log('before remove', getUsers());
    const delUser = removeUser(user);
    console.log('after remove', getUsers());
    if (!delUser.tabs) {
      io.to(user.room).emit('clientLeft', user.username);
    }
  };
}
const socketHandle = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', (options, callback) => {
      const sessionId = socket.handshake.session.id;
      const { user } = addUser({ sessionId, socketId: socket.id, ...options });
      console.log('sessionId', sessionId) // same value on every connection
      socket.join(user.room);
      console.log('after join', getUsers());
      socket.broadcast.to(user.room).emit('newClient', user.username);

      socket.on('newMessage', onNewMessage(user, io));

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
      });

      socket.on('logout', () => {
        socket.disconnect();
      });

      socket.on('disconnect', onSocketDisconnect(user, io));

      callback();
    });

  });
}

module.exports = socketHandle;

