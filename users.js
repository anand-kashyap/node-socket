const webpush = require('web-push'), users = {}, onlineUsers = {}, { User } = require('./api/models/user');

const addUser = ({ socketId, username, room }) => {
  // const eid = findUserIndex(username, room, true);
  let join = true;
  if (users[room]) {
    const f = users[room].indexOf(username);
    if (f === -1) {
      users[room].push(username);
    } else {
      join = false;
    }
  } else {
    users[room] = [username];
  }
  console.log('users', users);
  return { user: { socketId, username, room, join }/* , onlineUsers: onlineUsers[room] */ };
}

const addOnline = (username, socketId) => {
  if (onlineUsers[username]) {
    onlineUsers[username].push(socketId);
  } else {
    onlineUsers[username] = [socketId];
  }
  console.log('online added: ', onlineUsers, username);
  return { onlineUsers: Object.keys(onlineUsers), username };
};

const removeUser = ({ socketId, username, room }) => { // todo: add removing user of particular session
  /* const eid = findUserIndex(username, room);
  if (eid === -1) {
    return {
      error: 'User not present for deletion'
    }
  }
  if (users[eid].tabs.length > 1) {
    const sId = findSocketIndex(eid, socketId);
    if (sId !== -1) { // socket found
      users[eid].tabs.splice(sId, 1);
      return users[eid];
    } else {
      return {
        message: 'Socket to delete not found'
      }
    }
  }
  return users.splice(eid, 1)[0].username; */
}

const updateLastSeen = async (username) => {
  console.log('updating last seen');

  await User.findOneAndUpdate({ username }, {
    $currentDate: {
      lastSeen: true
    },
  });
}

const removeOnline = (username) => {
  if (onlineUsers[username].length === 1) {
    delete onlineUsers[username];
    for (const room in users) {
      if (users.hasOwnProperty(room)) {
        const roomArr = users[room];
        const f = roomArr.indexOf(username);
        if (f !== -1) {
          users[room].splice(f, 1);
        }
      }
    }
    updateLastSeen(username);
  } else {
    const f = onlineUsers[username].indexOf(username);
    onlineUsers[username].splice(f, 1);
  }
  console.log('removed online', username, onlineUsers);
  return { left: username, onlineUsers: Object.keys(onlineUsers) };
}

const findUserIndex = (username, room, online = false) => {
  if (online) {
    let found = -1;
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.room === room) {
        if (user.username === username) {
          found = i;
        } else {  // online users
          if (onlineUsers[room]) {
            const aPresent = onlineUsers[room].indexOf(user.username);
            if (aPresent === -1) {
              onlineUsers[room].push(user.username);
            }
          } else {
            onlineUsers[room] = [user.username];
          }
        }
      }
    }
    return found;
  }
  return users.findIndex(user => user.username === username && user.room === room);
}

const findSocketIndex = (eid, socketId) => {
  return users[eid].tabs.findIndex(id => id === socketId);
}

const findUsers = (room) => {
  return users.filter(user => user.room === room);
}

const getUsers = () => users;

const notify = (room) => { // members to notify
  console.log('notify called');
  webpush.setVapidDetails(
    'mailto:anandkashyap60@gmail.com',
    process.env.VAPID_PUBLIC,
    process.env.VAPID_PRIVATE
  );
  const members = room.members;
  const memLen = members.length;
  for (let i = 0; i < memLen; i++) {
    const username = members[i];
    User.findOne({ username }).then(
      user => {
        const notifSub = user.notificationSub;
        if (notifSub !== null) {
          const msg = room.messages[0];
          const sentBy = msg.username;
          const notificationPayload = {
            notification: {
              title: room.directMessage ? sentBy : `${room.roomName} - ${sentBy}`,
              body: msg.msg,
              vibrate: [100, 50, 100],
              icon: '/assets/icons/icon-192x192.png',
              badge: '/assets/icons/badge-72x72.png',
              data: {
                dateOfArrival: Date.now(),
                primaryKey: 1,
                url: '/user/chat/' + room._id
              }
            }
          };

          return webpush.sendNotification(
            notifSub, JSON.stringify(notificationPayload)).then(
              resp => console.log('resp', resp),
              err => console.error('err resp', err)
            );
        }
      },
      err => console.error(err) // ! better error handling
    )

  }
  /*
  const all = await User.findById('5d5b902a4dd82473d96343dc');
  const sub = all.notificationSub;

  console.log('Total subscriptions', sub);
  const notificationPayload = {
    "notification": {
      "title": "Angular News",
      "body": "Newsletter Available!",
      "vibrate": [100, 50, 100],
      "data": {
        "dateOfArrival": Date.now(),
        "primaryKey": 1
      },
      "actions": [{
        "action": "explore",
        "title": "Go to the site"
      }]
    }
  };

  return webpush.sendNotification(
    sub, JSON.stringify(notificationPayload)).then(
      resp => res.status(200).json({ data: resp }),
      err => res.status(406).json(err)
    ); */
};

module.exports = {
  addUser, removeUser, findUserIndex, addOnline, findUsers, getUsers, removeOnline, onlineUsers, notify
}