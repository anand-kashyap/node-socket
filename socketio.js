
const socketHandle = (io) => {
  io.on('connection', (socket) => {
    // console.log('new client connected');
    // socket.broadcast.emit('newClient');

    socket.on('join', ({username, room}) => {
      socket.join(room);
      socket.broadcast.to(room).emit('newClient', `${username} has joined`);

      socket.on('newMessage', (msg) => {
        io.to(room).emit('newMessage', msg, username);
      });

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, username);
      });

      socket.on('disconnect', () => {
        io.to(room).emit('clientLeft', `${username} has left`);
      });
    });


  });
}

module.exports = socketHandle;