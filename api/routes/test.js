const express = require('express');

const router = express.Router();
const { deleteUser, getRecentChatsNew, getRecentChatsOld } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);
router.get('/chatsold/:userName', getRecentChatsOld);
router.get('/chatsnew/:userName', getRecentChatsNew);

module.exports = router;
