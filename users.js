const users = [], onlineUsers = {};

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

const removeOnline = (user) => {
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

module.exports = {
  addUser, removeUser, findUserIndex, findUsers, getUsers, removeOnline
}