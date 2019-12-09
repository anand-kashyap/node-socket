const { User } = require('../models/user');

const getRooms = (req, res) => {

  return res.status(200).json({ success: true });
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

module.exports = {
  getRooms,
  deleteUser
};