const express = require('express');
const uploadFile = require('../utils/uploadFile');

const router = express.Router();
const { deleteUser, getRecentChatsNew, addProperty, upload, sendnotify, getOlder, clearOtps } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);
router.get('/chatsnew/:userName', getRecentChatsNew);
router.post('/upload', uploadFile.single('file'), upload);
// router.get('/clearOtps/:userId', clearOtps);
// router.get('/addProp', addProperty);
// router.post('/notify', sendnotify);
// router.get('/older', getOlder);

module.exports = router;
