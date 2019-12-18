const users = [];

const addUser = ({ socketId, username, room }) => {
  const eid = findUserIndex(username, room);
  console.log('users', users);
  if (eid !== -1) {
    // connect to previous chat
    users[eid].tabs.push(socketId);
  } else {
    const user = { username, room, tabs: [socketId] };
    users.push(user);
  }
  return { user: { socketId, username, room } };
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

const findUserIndex = (username, room) => {
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
  addUser, removeUser, findUserIndex, findUsers, getUsers
}