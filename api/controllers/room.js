const { Room } = require('../models/room');

const findCreateRoom = (req, res, next) => {
  console.log(req.body);
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
  const directMessage = req.body.directMessage ? req.body.directMessage: true;
  Room.findOne(
    {
      members: { $all: req.body.userNameArr},
      directMessage
    }).then(
    (room) => {
      console.log('room', room);
      if (room) {
        return res.status(200).json({ success: true, data: room });
      } else {
        const newRoom = new Room({
          members: req.body.userNameArr,
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
  ).catch(err => res.status(400).json(err.message));
};

module.exports = {
  findCreateRoom
}