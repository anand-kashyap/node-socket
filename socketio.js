const { addUser, removeOnlineNew, notify, addActive, removeActive, getActive } = require('./users');
const { Room } = require('./api/models/room');
const { existsSync, unlinkSync } = require('fs');
const { Observable } = require('rxjs')

/** On New Message Method
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onNewMessage = (user, io) => {
  return (msg, prod) => {
    const message = {
      ...msg,
      username: user.username
    };
    // console.log('msgObj', message);
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
  };
}

/** On load older messages
 * @param  {object} user: User Object
 * @param  {object} io: io instance
 * TODO: better jsdoc
 */
const onloadMsgs = (user, io) => {
  return ({ skip, limit }) => {
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
  };
}

/** On Socket Disconnect
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onSocketDisconnect = (username, io) => {
  // return () => {
  const delUser = removeActive(username);
  console.log('deleted', delUser);
  if (!delUser) {
    io.emit('active', removeOnlineNew(username));
  }
  /* const delUser = removeUser(user);
  console.log('after remove', getUsers());
  if (!delUser.tabs) {
    io.to(user.room).emit('clientLeft', removeOnline(user));
  } */
  // };
}

const socketEvent$ = (socket, eventName) => {
  return new Observable((observ) => {
    const cb = (msg, prod) => {
      observ.next(msg, prod)
    }
    socket.on(eventName, cb);

    return () => socket.removeListener(eventName, cb);
  })
};
const socketHandle = (io) => {
  io.on('connection', (socket) => {
    socket.on('active', (username, cb) => {
      io.emit('active', addActive(username));

      socket.on('disconnect', () => {
        onSocketDisconnect(username, io);
      });
    });
    socket.on('join', (options, cb) => {
      const { user } = addUser({ socketId: socket.id, ...options });
      socket.join(user.room);
      const subs = [
        socketEvent$(socket, 'newMessage').subscribe(onNewMessage(user, io)),
        socketEvent$(socket, 'deleteMessage').subscribe(onDeleteMessage(user, io)),
        socketEvent$(socket, 'loadMsgs').subscribe(onloadMsgs(user, io)),
        socketEvent$(socket, 'typing').subscribe(onTyping(socket, user)),
        socketEvent$(socket, 'sendLocation').subscribe(onLocation(socket, user))
      ];
      // console.log('before ev', socket._events, socket.eventNames());
      socket.on('left', () => {
        for (const sub of subs) {
          sub.unsubscribe();
        }
        // console.log('after ev', socket._events, socket.eventNames());
        socket.leave(user.room);
      });
      // socket.on('disconnect', onSocketDisconnect(user, io));
      cb(getActive());
    });

  });
}

module.exports = socketHandle;

function onLocation(socket, user) {
  return (data) => {
    socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
  };
}

function onTyping(socket, user) {
  return () => {
    socket.broadcast.to(user.room).emit('typing', user.username);
  };
}

