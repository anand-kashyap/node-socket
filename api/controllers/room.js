const { Room } = require('../models/room');
const validator = require('../../services/expressValidation');

const findCreateRoom = (req, res, next) => {
  console.log(req.body);
  if (validator(req, res)) return;
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
  const directMessage = body.userNameArr.length === 2 ? true : false;
  const initMsgs = body.initMsgs ? body.initMsgs : 50;
  Room.findOne(
    {
      members: { $all: body.userNameArr },
      directMessage
    },
    { messages: { $slice: -initMsgs } }).then(room => {
      console.log('room', room)
      if (room) {
        return res.status(200).json({ success: true, data: room });
      } else {
        const newRoom = new Room({
          members: body.userNameArr,
          directMessage
        });
        newRoom.save().then((newRoom, err) => {
          console.log('newRoom', newRoom);
          if (err) {
            console.error(err);
          }
          return res.status(201).json({ success: true, data: newRoom });
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
  if (validator(req, res)) return;

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
  if (validator(req, res)) return;

  Room.findById(req.params.roomId).then(room => {
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
  if (validator(req, res)) {
    return;
  }
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

const clearMsgs = (req, res) => {
  if (validator(req, res)) return;

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