const { updateLastSeen, addActive, removeActive, joinRoom } = require('./users');
const { onNewMessage, onDeleteMessage, onloadMsgs, onLocation } = require('./message');
const { socEvt$, sockUEvent$ } = require('./helper');

const onTyping = (socket) => {
  const { user: { room, username } } = socket;
  socket.broadcast.to(room).emit('typing', username);
}

/** On Socket Disconnect
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onSocketDisconnect = (username, io, sid) => {
  return () => {
    const remUser = removeActive(username, sid);
    remUser.length && console.log('remaining ids of user', remUser.length);
    if (!remUser) {
      io.emit('active', updateLastSeen(username));
    }
  };
}

const socketHandle = (io) => {
  socEvt$(io, 'connection').subscribe(socket => {
    let user;
    socEvt$(socket, 'active').subscribe((username) => {
      io.emit('active', addActive(username, socket));
      socEvt$(socket, 'disconnect').subscribe(onSocketDisconnect(username, io, socket.id));
    });
    socEvt$(socket, 'join').subscribe(({ username, room, otherUsernames }) => {
      // console.log('sId', socket.id);
      user = { username, room };
      socket.user = user; // saving in socket prop
      joinRoom([username, ...otherUsernames], room);
      // socket.join(room);
      /* socEvt$(socket, 'left').subscribe(() => {
        // console.log('after ev', socket._events, socket.eventNames());
        socket.leave(room);
      }); */
    });
    sockUEvent$(socket, 'newMessage').subscribe((...args) => onNewMessage(user, io, ...args));
    sockUEvent$(socket, 'deleteMessage').subscribe((msg) => onDeleteMessage(user, io, msg));
    sockUEvent$(socket, 'loadMsgs').subscribe(pageObj => onloadMsgs(user, socket, pageObj));
    sockUEvent$(socket, 'typing').subscribe(() => onTyping(socket));
    sockUEvent$(socket, 'sendLocation').subscribe((data) => onLocation(socket, data));

  });
}

module.exports = socketHandle;
