const { Room } = require('../models/room');

const findCreateRoom = (req, res, next) => {
  console.log(req.body);
  Room.findOne(
    {
      members: { $all: req.body.userNameArr}
    }).then(
    (room) => {
      console.log('room', room);
      if (room) {
        return res.status(200).json({ success: true, data: room });
      } else {
        const newRoom = new Room({
          members: req.body.userNameArr
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
 /*  User = userModel.User;
  User.find({isAdmin: false}).then((users) => {
    console.log(users);
    return res.status(200).json(users);
  }, err => {
    console.log(err);
    return res.status(400).json(err.message);
  }); */
};

module.exports = {
  findCreateRoom
}