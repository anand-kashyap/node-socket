const {addUser, removeUser, findUsers, findUserIndex, getUsers} = require('./users');

const socketHandle = (io) => {
  io.on('connection', (socket) => {
    if (!socket.handshake.session.id) { // safeguard for dev
      socket.handshake.session.id = Math.floor(Math.random()*1532);
    }
    console.log('id', socket.handshake.session.id) // same value on every connection
    socket.on('join', (options, callback) => {
      options.room = options.room.trim().toLowerCase();
      const {user} = addUser({id: socket.handshake.session.id, socketId: socket.id, ...options});
      console.log('before join', getUsers());
      socket.join(user.room);
      console.log('after join', getUsers());
      socket.broadcast.to(user.room).emit('newClient', user.username);

      socket.on('newMessage', (msg) => {
        console.log('user', user);
        io.to(user.room).emit('newMessage', msg, user.username, new Date());
      });

      socket.on('sendLocation', (data) => {
        socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
      });

      socket.on('logout', () => {
        socket.disconnect();
      });

      socket.on('disconnect', () => {
        console.log('before remove', getUsers());
        const delUser = removeUser(user);
        console.log('after remove', getUsers());
        if (!delUser.tabs) {
          io.to(user.room).emit('clientLeft', user.username);
        }
      });

      callback();
    });


  });
}

module.exports = socketHandle;