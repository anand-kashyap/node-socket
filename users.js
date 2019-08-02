const users = [];

const addUser = ({id, username, room}) => {
  const eid = findUserIndex(username, room);
  if (eid !== -1) {
    return {
      error: 'Username already in use!'
    }
  }
  
  const user = {id, username, room};
  users.push(user);
  return {user};
}

const removeUser = ({username, room}) => {
  const eid = findUserIndex(username, room);
  if (eid == -1) {
    return {
      error: 'User not present for deletion'
    }
  }
  return users.splice(eid, 1)[0];
}

const findUserIndex = (username, room) => {
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();
  return users.findIndex(user => user.username === username && user.room === room);
}

const findUsers = (room) => {
  return users.filter(user => user.room === room);
}

module.exports = {
  addUser, removeUser, findUserIndex, findUsers
}