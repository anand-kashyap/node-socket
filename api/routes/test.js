const express = require('express');

const router = express.Router();
const { deleteUser, getRecentChatsNew, getRecentChatsOld, checkSession, checkSession2 } = require('../controllers/test');

router.delete('/delUser/:userId', deleteUser);
router.get('/chatsold/:userName', getRecentChatsOld);
router.get('/chatsnew/:userName', getRecentChatsNew);
router.get('/session', checkSession);
router.get('/session2', checkSession2);

module.exports = router;
