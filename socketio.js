const {addUser, removeUser, findUsers} = require('./users');

const socketHandle = (io) => {
  io.on('connection', (socket) => {

    socket.on('join', (options, callback) => {
      const {error, user} = addUser({id: socket.id, ...options});
      if (error) {
        return callback(error);
      }
      socket.join(user.room);
      socket.broadcast.to(user.room).emit('newClient', `${user.username} has joined`);

      socket.on('newMessage', (msg) => {
        io.to(user.room).emit('newMessage', msg, user.username);
      });

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username);
      });

      socket.on('disconnect', () => {
        removeUser({id: socket.id, ...options});
        io.to(user.room).emit('clientLeft', `${user.username} has left`);
      });

      callback();
    });


  });
}

module.exports = socketHandle;