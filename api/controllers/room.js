const { Room } = require('../models/room');
const { sortByDate } = require('../utils/common');


const findCreateRoom = (req, res, next) => {
  console.log(req.body);
  const body = req.body;
  // return res.status(200).json({ test: 'success', d: -req.body.initMsgs });
  /* const room = {
    roomName: '',
    members: [ 'anand_ak', 'anand' ],
    directMessage: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    messages: [],
    _id: '5da9b02e5d42336c17237de0',
    __v: 0
  };
  return res.status(200).json({ success: true, data: room }); */
  const currentUser = body.currentUser;
  const directMessage = body.userNameArr.length === 1 ? true : false;
  body.userNameArr.push(currentUser);
  const initMsgs = body.initMsgs || 50;
  Room.findOne(
    {
      members: { $all: body.userNameArr },
      directMessage
    },
    { messages: { $slice: -initMsgs } }).then(room => {
      console.log('room', room)
      if (room) {
        if (currentUser) {
          const ind = room.members.indexOf(currentUser);
          if (ind != -1) {
            room.members.splice(ind, 1);
          }
        }
        return res.status(200).json({ success: true, data: room });
      } else {
        const newRoom = new Room({
          members: body.userNameArr,
          directMessage
        });
        newRoom.save().then((newRoomDoc, err) => {
          console.log('newRoom', newRoomDoc);
          if (err) {
            console.error(err);
          }
          if (currentUser) {
            const ind = newRoomDoc.members.indexOf(currentUser);
            if (ind != -1) {
              newRoomDoc.members.splice(ind, 1);
            }
          }
          return res.status(201).json({ success: true, data: newRoomDoc });
        });
      }
    }
    ).catch(err => res.status(400).json({ success: false, message: err.message }));
};

const getRooms = (req, res) => {
  Room.find({}).then(rooms => {
    // console.log(rooms);
    return res.status(200).json({ success: true, rooms });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, message: err.message });
  }).catch(ex => {
    console.warn('Exception occured', ex);
    return res.status(500).json({ success: false, message: ex.message });
  })
};

const deleteRoom = (req, res) => {

  Room.findByIdAndDelete(req.params.roomId).then(deletedRoom => {
    return res.status(200).json({ success: true, deletedRoom });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, message: err.message });
  }).catch(ex => {
    console.warn('Exception occured', ex);
    return res.status(500).json({ success: false, message: ex.message });
  })
};

const getRoomById = (req, res) => {

  const { msgLimit = 30, currentUser } = req.query;
  console.log('qsss', req.query);

  Room.findById(req.params.roomId, { messages: { $slice: -msgLimit } }).then(room => {
    if (currentUser) {
      const ind = room.members.indexOf(currentUser);
      if (ind != -1) {
        room.members.splice(ind, 1);
      }
    }
    return res.status(200).json({ success: true, data: room });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, message: err.message });
  }).catch(ex => {
    console.warn('Exception occured', ex);
    return res.status(500).json({ success: false, message: ex.message });
  })
};

const deleteSingleMessage = (req, res) => {
  if (validator(req, res)) {
    return;
  }
  const params = req.params;
  Room.findByIdAndUpdate({ _id: params.roomId }, { $pull: { messages: { _id: params.msgId } } },
    { new: true }).then(updatedRoom => {
      return res.status(200).json({ success: true, updatedRoom });
    }, err => {
      console.error(err);
      return res.status(402).json({ success: false, err });
    })
};

const getRecentChats = (req, res) => { // get all recent rooms of user
  // return res.status(401).json({ success: false, data: 'test' });
  const params = req.params;
  const msgLimit = req.query.msgLimit || 30;
  Room.find({ members: params.userName }, { messages: { $slice: -msgLimit } }).sort('-updatedAt').limit(20).then(recentRooms => {
    for (let i = 0; i < recentRooms.length; i++) {
      const { members } = recentRooms[i];
      const index = members.indexOf(params.userName);
      members.splice(index, 1);
      recentRooms[i].members = members;
    }
    recentRooms.sort(sortByDate('lastMessage', 'createdAt'));
    return res.status(200).json({ success: true, data: recentRooms });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, err });
  })
};

const clearMsgs = (req, res) => {

  Room.findByIdAndUpdate(req.params.roomId, { messages: [] }, { new: true }).then(updatedRoom => {
    return res.status(200).json({ success: true, updatedRoom });
  }, err => {
    console.error(err);
    return res.status(402).json({ success: false, message: err.message });
  }).catch(ex => {
    console.warn('Exception occured', ex);
    return res.status(500).json({ success: false, message: ex.message });
  })
};

module.exports = {
  findCreateRoom,
  getRooms,
  deleteRoom,
  getRoomById,
  getRecentChats,
  deleteSingleMessage,
  clearMsgs
}