const {addUser, removeUser, findUsers, findUserIndex, getUsers} = require('./users');
const { Room } = require('./api/models/room');

const socketHandle = (io) => {
  io.on('connection', (socket) => {
    socket.on('join', (options, callback) => {
      const {user} = addUser({sessionId: socket.handshake.session.id, socketId: socket.id, ...options});
      console.log('sessionId', socket.handshake.session.id) // same value on every connection
      socket.join(user.room);
      console.log('after join', getUsers());
      socket.broadcast.to(user.room).emit('newClient', user.username);

      socket.on('newMessage', (msg) => {
        const message = {
          msg,
          username: user.username,
          date: new Date()
        }
        console.log('msgObj', message);
        io.to(user.room).emit('newMessage', {...message});
        Room.findByIdAndUpdate(
          {_id: user.room},
          {
            $push: {
              messages: message
              /* messages: {
                $each: [message],
                $position: 0,
              } */ 
            }
          },
          {new: true},
          (err, res) => {
            if (err) {
              console.log('err ocurred', err);
            }
            console.log('saved message', res);
          });
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