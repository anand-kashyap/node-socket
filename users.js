const webpush = require('web-push'), users = [], onlineUsers = {}, { User } = require('./api/models/user');

const addUser = ({ socketId, username, room }) => {
  const eid = findUserIndex(username, room, true);
  console.log('users', users);
  if (eid !== -1) {
    // connect to previous chat
    users[eid].tabs.push(socketId);
  } else {
    const user = { username, room, tabs: [socketId] };
    users.push(user);
    if (onlineUsers[room]) {
      onlineUsers[room].push(user.username);
    } else {
      onlineUsers[room] = [user.username];
    }
  }
  return { user: { socketId, username, room }, onlineUsers: onlineUsers[room] };
}

const removeUser = ({ socketId, username, room }) => { // todo: add removing user of particular session
  const eid = findUserIndex(username, room);
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
  return users.splice(eid, 1)[0].username;
}

const updateLastSeen = async (username) => {
  console.log('updating last seen');

  await User.findOneAndUpdate({ username }, {
    $currentDate: {
      lastSeen: true
    },
  });
}
const removeOnline = (user) => {
  updateLastSeen(user.username);
  // console.log('updated user: ', res);
  if (onlineUsers[user.room]) {
    const f = onlineUsers[user.room].indexOf(user.username);
    if (f !== -1) {
      onlineUsers[user.room].splice(f, 1);
    }
    return { left: user.username, onlineUsers: onlineUsers[user.room] };
  }
  return { left: user.username, onlineUsers: [] };
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
                primaryKey: 1
              },
              actions: [{
                action: 'explore',
                title: 'Go to the site'
              }]
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
  addUser, removeUser, findUserIndex, findUsers, getUsers, removeOnline, notify
}