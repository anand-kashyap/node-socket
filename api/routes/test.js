const express = require('express');

const router = express.Router();
const { deleteUser, getRecentChatsNew, addProperty, sendnotify, getOlder, clearOtps } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);
router.get('/chatsnew/:userName', getRecentChatsNew);
// router.get('/clearOtps/:userId', clearOtps);
// router.get('/addProp', addProperty);
// router.post('/notify', sendnotify);
// router.get('/older', getOlder);

module.exports = router;
