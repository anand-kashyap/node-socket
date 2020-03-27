const webpush = require('web-push'), activeUsers = {}, { User } = require('../api/models/user');

const updateLastSeen = (username) => {
  console.log('updating last seen');
  User.findOneAndUpdate({ username }, {
    $currentDate: {
      lastSeen: true
    },
  }).then(() => console.log('done up'));
  return getActive();
}

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

const addActive = (username, socketObj) => {
  if (activeUsers[username]) {
    activeUsers[username].push(socketObj);
  } else {
    activeUsers[username] = [socketObj];
  }
  return getActive();
}

const removeActive = (username, remSid) => {
  const torem = activeUsers[username];
  const id = torem.findIndex(s => s.id === remSid);
  torem.splice(id, 1);
  if (torem.length === 0) {
    delete activeUsers[username];
    return false;
  }
  return torem;
};

const joinRoom = (usernames, roomId) => usernames.forEach(u => {
  if (activeUsers[u]) {
    activeUsers[u].forEach(s => s.join(roomId)); // all sockets of that room join it
  }
});
const getActive = () => {
  const online = Object.keys(activeUsers);
  console.log('onlin', online)
  return online;
}

module.exports = {
  getActive, notify, addActive, removeActive, updateLastSeen, joinRoom
}