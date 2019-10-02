const {addUser, removeUser, findUsers} = require('./users');

const socketHandle = (io) => {
  io.on('connection', (socket) => {
    // console.log('id', socket.handshake.session.id) // same value on every connection
    socket.on('join', (options, callback) => {
      options.username = options.username.trim().toLowerCase();
      options.room = options.room.trim().toLowerCase();
      const {error, user} = addUser({id: socket.handshake.session.id, ...options});
      if (error) {
        return callback(error);
      }
      socket.join(user.room);
      socket.broadcast.to(user.room).emit('newClient', `${user.username} has joined`);

      socket.on('newMessage', (msg) => {
        io.to(user.room).emit('newMessage', msg, user.username, new Date());
      });

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
      });

      socket.on('logout', () => {
        socket.disconnect();
      });

      socket.on('disconnect', () => {
        removeUser({...options});
        io.to(user.room).emit('clientLeft', `${user.username} has left`);
      });

      callback();
    });


  });
}

module.exports = socketHandle;