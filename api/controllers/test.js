const webpush = require('web-push');
const { User } = require('../models/user');
const { Room } = require('../models/room');

const getRooms = (req, res) => {

  return res.status(200).json({ success: true });
}

const addProperty = (req, res) => {
  User.updateMany({}, { $set: { lastSeen: null } }, { upsert: true }).then(resp =>
    res.status(200).json({ success: true, resp })
    , err =>
      res.status(406).json({ success: false, err })
  );
}

const sendnotify = async (req, res) => {
  webpush.setVapidDetails(
    'mailto:anandkashyap60@gmail.com',
    process.env.VAPID_PUBLIC,
    process.env.VAPID_PRIVATE
  );

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
    )
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

const getOlder = (req, res) => {
  /* Room.aggregate([
    { $match: { _id: mongoose.Types.ObjectId('5dac17d7bc01681dd8d34cf4') } },
    {
      $project: {
        // count: { $size: "$messages" },
        messages: { $slice: ["$messages", 0, { $subtract: [{ $size: "$messages" }, 30] }] }
      }
    }
  ]).then(resp =>
    res.status(200).json(resp)
  ) */
  /* Room.findOne({ _id: '5dac17d7bc01681dd8d34cf4' }, { messages: { $slice: [-31, 3] } }).then(older => {
    res.status(200).json(older.messages);
    // socket.emit('loadMsgs', older.messages);
  }).catch(err => {
    res.status(400).json(err);
    console.error('err ocurred', err)
  }
  ); */
}

const clearOtps = (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    return res.status(422).json({ success: false, message: 'UserId not sent' });
  }

  User.findByIdAndUpdate(userId, { otps: [] }).then(resp => {
    // console.log(resp);
    res.status(200).json({ message: `cleared OTP for ${resp.fullName}` });
  },
    err => res.status(400).json(err));

};

module.exports = {
  getRooms,
  deleteUser,
  getRecentChatsNew,
  addProperty, sendnotify, getOlder, clearOtps
};