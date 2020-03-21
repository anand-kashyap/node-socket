const { removeOnlineNew, notify, addActive, removeActive, getActive } = require('./users');
const { Room } = require('./api/models/room');
const { existsSync, unlinkSync } = require('fs');
const { Observable } = require('rxjs');
const { filter } = require('rxjs/operators');

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

const onLocation = (socket, user, data) => {
  // return (data) => {
  socket.broadcast.to(user.room).emit('newMessage', `<a target='_blank' href='https://www.google.com/maps?q=${data.lat},${data.long}'>Location</a>`, user.username, new Date());
  // };
}

const onTyping = (socket, user) => {
  // return () => {
  // console.log('type', user.username, user.room);
  socket.broadcast.to(user.room).emit('typing', user.username);
  // };
}

/** On Socket Disconnect
 * @param  {object} user: User Object
 * @param  {object} io: Socket io instance
 * TODO: better jsdoc
 */
const onSocketDisconnect = (username, io) => {
  return () => {
    const delUser = removeActive(username);
    console.log('deleted', delUser);
    if (!delUser) {
      io.emit('active', removeOnlineNew(username));
    }
  };
}

const socEvt$ = (socket, eventName) => {
  return new Observable((observ) => {
    const cb = (msg, prod) => {
      observ.next(msg, prod)
    }
    socket.on(eventName, cb);
    return () => socket.removeListener(eventName, cb);
  })
};
const socketHandle = (io) => {
  socEvt$(io, 'connection').subscribe(socket => {
    let user;
    socEvt$(socket, 'active').subscribe((username) => {
      io.emit('active', addActive(username));
      socEvt$(socket, 'disconnect').subscribe(onSocketDisconnect(username, io));
    });
    socket.on('join', ({ username, room }, cb) => { // ! find way to use callbacks in observable
      console.log('sId', socket.id);
      user = { username, room }; // saving in socket prop
      socket.join(room);
      socEvt$(socket, 'left').subscribe(() => {
        // console.log('after ev', socket._events, socket.eventNames());
        socket.leave(room);
      });
      cb(getActive());
    });
    socEvt$(socket, 'newMessage').pipe(
      filter(() => user)
    ).subscribe((...args) => onNewMessage(user, io, ...args));
    socEvt$(socket, 'deleteMessage').pipe(
      filter(() => user)
    ).subscribe((msg) => onDeleteMessage(user, io, msg));
    socEvt$(socket, 'loadMsgs').pipe(
      filter(() => user)
    ).subscribe(pageObj => onloadMsgs(user, io, pageObj));
    socEvt$(socket, 'typing').pipe(
      filter(() => user)
    ).subscribe(() => onTyping(socket, user));
    socEvt$(socket, 'sendLocation').pipe(
      filter(() => user)
    ).subscribe((data) => onLocation(socket, user, data));

  });
}

module.exports = socketHandle;
