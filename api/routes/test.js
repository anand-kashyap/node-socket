const express = require('express');

const router = express.Router();
const { deleteUser, getRecentChatsNew, addProperty, sendnotify } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);
router.get('/chatsnew/:userName', getRecentChatsNew);
// router.get('/addProp', addProperty);
// router.post('/notify', sendnotify);

module.exports = router;
