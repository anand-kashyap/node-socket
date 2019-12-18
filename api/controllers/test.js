const { User } = require('../models/user');
const { Room } = require('../models/room');

const getRooms = (req, res) => {

  return res.status(200).json({ success: true });
}

const checkSession = (req, res) => {
  req.session.test = 'by ak';
  return res.status(200).json({ success: true, session: req.session, sid: req.session.id });
}

const checkSession2 = (req, res) => {

  return res.status(200).json({ success: true, session: req.session, sid: req.session.id });
}

const deleteUser = (req, res) => {
  /* User.collection.getIndexes({ full: true }).then(resp => {
    console.log(resp);
    res.status(200).json({ indexes: resp });
  }, err => {
    console.error(err);
    res.status(400).json({ message: 'error fetching indexes' });
  }
  ); return; */
  /* User.collection.dropIndex('username_1').then(resp => {
    console.log(resp);
    res.status(200).json({ message: 'dropped unique index' });
  }, err => {
    console.error(err);
    res.status(400).json({ message: 'error dropping unique index' });
  }
  ); return; */
  const { userId } = req.params;
  User.findByIdAndDelete(userId).then(
    resp =>
      res.status(200).json({ message: 'user deleted successfully' }),
    err =>
      res.status(400).json({ message: 'user deletion error', error: err.message })
  )
}

const getRecentChatsOld = (req, res) => { // get all recent rooms of user
  /* if (validator(req, res)) {
    return;
  } */
  const params = req.params;
  Room.find({ members: params.userName }, '_id directMessage members updatedAt roomName').sort('-updatedAt').limit(20).then(recentRooms => {
    for (let i = 0; i < recentRooms.length; i++) {
      const members = recentRooms[i].members;
      const index = members.indexOf(params.userName);
      members.splice(index, 1);
      recentRooms[i].members = members;
    }
    return res.status(200).json({ success: true, data: recentRooms });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, err });
  })
};

const getRecentChatsNew = (req, res) => { // get all recent rooms of user
  /* if (validator(req, res)) {
    return;
  } */
  const params = req.params;
  Room.find({ members: params.userName }, { messages: { $slice: -30 } }).sort('-updatedAt').limit(20).then(recentRooms => {
    for (let i = 0; i < recentRooms.length; i++) {
      const members = recentRooms[i].members;
      const index = members.indexOf(params.userName);
      members.splice(index, 1);
      recentRooms[i].members = members;
    }
    return res.status(200).json({ success: true, data: recentRooms });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, err });
  })
};

module.exports = {
  getRooms,
  deleteUser,
  getRecentChatsOld, getRecentChatsNew, checkSession, checkSession2
};